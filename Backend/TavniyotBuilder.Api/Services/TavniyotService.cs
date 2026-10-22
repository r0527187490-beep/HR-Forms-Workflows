using Dapper;
using Ganss.Xss;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;
using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private readonly HtmlSanitizer _sanitizer;
        // Maximum allowed HTML length
        private const int MaxHtmlLength = 1_000_000;

        private static readonly JsonSerializerOptions MivneJsonOptions = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            PropertyNameCaseInsensitive = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        private readonly TavniyotBuilderContext _tavniyotContext;
        public TavniyotService(TavniyotBuilderContext tavniyotContext)
        {
            _tavniyotContext = tavniyotContext;
            _sanitizer = new HtmlSanitizer();

            _sanitizer.AllowedAttributes.Add("id");
        }
        public string Clean(string html)
        {
            if (string.IsNullOrWhiteSpace(html))
                throw new ArgumentException("ה-HTML לא יכול להיות ריק.");

            if (html.Length > MaxHtmlLength)
                throw new ArgumentException("ה-HTML גדול מדי.");

            return _sanitizer.Sanitize(html);
        }

        public async Task<List<CodTeur>> GetCodTeurTavniyotTEST()
        {
            var sp = "GetCodTeurTavniyot";
            using var connection = _tavniyotContext.CreateConnection();

            var data = (await connection.QueryAsync(
                sql: sp,
                commandType: CommandType.StoredProcedure
            )).ToList();

            var codTeurList = new List<CodTeur>();

            foreach (var item in data)
            {
                if (item.CodTofes != null && item.NameTofes != null)
                {
                    codTeurList.Add(new CodTeur
                    {
                        Cod = item.CodTofes,
                        Teur = item.NameTofes
                    });
                }
            }

            return codTeurList;
        }

        public async Task<List<FormControl>> GetSmartFieldsList()
        {
            var sp = "GetSmartFields";
            using var connection = _tavniyotContext.CreateConnection();

            var smartFields = await connection.QueryAsync<SmartField>(
                sql: sp,
                param: new { OnlyActive = true },
                commandType: CommandType.StoredProcedure
            );

            var controls = new List<FormControl>();

            foreach (var smartField in smartFields)
            {
                if (!TryGetSmartFieldControlType(smartField, out ControlType controlType))
                {
                    continue;
                }

                controls.Add(new FormControl
                {
                    Id = ToCamelCase(smartField.DataKey),
                    Type = controlType,
                    Label = smartField.ShemSadeh,
                    Required = false,
                    IsSmartField = true,
                    SmartFieldKey = smartField.IdRec,
                    ReadOnly = true
                });
            }

            return controls;
        }

        private static string ToCamelCase(string value)
        {
            return char.ToLowerInvariant(value[0]) + value.Substring(1);
        }
        private static bool TryGetSmartFieldControlType(SmartField smartField, out ControlType controlType)
        {
            switch (smartField.Type?.ToLowerInvariant())
            {
                case "text":
                    controlType = ControlType.Text;
                    return true;
                case "number":
                    controlType = ControlType.Number;
                    return true;
                case "date":
                    controlType = ControlType.Date;
                    return true;
                default:
                    controlType = default;
                    return false;
            }
        }
        public List<FormControl> GetBasicControlsList()
        {
            return new List<FormControl>
            {
                new FormControl { Type = ControlType.Text, Label = "טקסט קצר" },
                new FormControl { Type = ControlType.Paragraph, Label = "פסקה" },
                new FormControl { Type = ControlType.Date, Label = "תאריך" },
                new FormControl { Type = ControlType.File, Label = "העלאת קובץ" }
            };
        }

        public async Task<string> PrepareFormForSave(FormStructure form)
        {
            List<string> errors = await ValidateFormStructure(form);

            if (errors.Count > 0)
            {
                throw new ArgumentException(string.Join(" | ", errors));
            }

            return JsonSerializer.Serialize(form, MivneJsonOptions);
        }

        public FormStructure RestoreFormStructure(string mivneJson)
        {
            try
            {
                return JsonSerializer.Deserialize<FormStructure>(mivneJson, MivneJsonOptions)
                    ?? throw new ArgumentException("Form structure is empty");
            }
            catch (JsonException ex)
            {
                throw new ArgumentException($"Form structure is not valid: {ex.Message}");
            }
        }

        public async Task<FormDetails> SaveForm(FormDetails formDetails, int idYotzer)
        {
            if (string.IsNullOrWhiteSpace(formDetails.ShemTofes))
            {
                throw new ArgumentException("The form has no name");
            }

            if (formDetails.ShemTofes.Trim().Length > 255)
            {
                throw new ArgumentException("The form name is too long (up to 255 characters)");
            }

            bool hasForm = formDetails.Form != null;
            bool hasHtml = formDetails.TochenHtml != null;

            if (hasForm == hasHtml)
            {
                throw new ArgumentException("Exactly one of Form or TochenHtml must be provided");
            }

            string? mivneJson = null;
            string? tochenHtml = null;
            bool isKolelShdotChachamim = false;

            if (hasForm)
            {
                mivneJson = await PrepareFormForSave(formDetails.Form!);
                isKolelShdotChachamim = formDetails.Form!.Controls.Any(control => control.IsSmartField);
            }
            else
            {
                tochenHtml = Clean(formDetails.TochenHtml!);
            }

            int? idRecTavnit = formDetails.IdRecTavnit > 0 ? formDetails.IdRecTavnit : null;

            var sp = "SaveTofes";
            var parameters = new DynamicParameters();
            parameters.Add("@IdRecTavnit", idRecTavnit, DbType.Int32);
            parameters.Add("@ShemTofes", formDetails.ShemTofes.Trim(), DbType.String, size: 255);
            parameters.Add("@Teur", formDetails.Teur, DbType.String, size: -1);
            parameters.Add("@IsKolelShdotChachamim", isKolelShdotChachamim, DbType.Boolean);
            parameters.Add("@MivneJson", mivneJson, DbType.String, size: -1);
            parameters.Add("@TochenHtml", tochenHtml, DbType.String, size: -1);
            parameters.Add("@IsPail", formDetails.IsPail, DbType.Boolean);
            parameters.Add("@IdYotzer", idYotzer, DbType.Int32);

            using var connection = _tavniyotContext.CreateConnection();

            var savedForm = await connection.QuerySingleOrDefaultAsync<FormDetails>(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            );

            if (savedForm == null)
            {
                throw new ArgumentException($"Form {formDetails.IdRecTavnit} was not found");
            }

            savedForm.TochenHtml = tochenHtml;

            return savedForm;
        }

        public async Task<FormDetails> GetForm(int idRecTavnit, int? misparGirsa = null)
        {
            var sp = "GetTofes";
            var parameters = new DynamicParameters();
            parameters.Add("@IdRecTavnit", idRecTavnit, DbType.Int32);
            parameters.Add("@MisparGirsa", misparGirsa, DbType.Int32);

            using var connection = _tavniyotContext.CreateConnection();

            var data = await connection.QuerySingleOrDefaultAsync(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            );

            if (data == null)
            {
                throw new ArgumentException(misparGirsa == null
                    ? $"Form {idRecTavnit} was not found"
                    : $"Form {idRecTavnit} version {misparGirsa} was not found");
            }

            return new FormDetails
            {
                IdRecTavnit = data.IdRecTavnit,
                ShemTofes = data.ShemTofes,
                Teur = data.Teur,
                IsPail = data.IsPail,
                IdRecTofesVersion = data.IdRecTofesVersion,
                MisparGirsa = data.MisparGirsa,
                IsMivneJson = data.MivneJson != null,
                Form = data.MivneJson != null ? RestoreFormStructure((string)data.MivneJson) : null,
                TochenHtml = data.TochenHtml
            };
        }

        public async Task<List<FormDetails>> GetFormVersions(int idRecTavnit)
        {
            var sp = "GetTofesVersions";
            var parameters = new DynamicParameters();
            parameters.Add("@IdRecTavnit", idRecTavnit, DbType.Int32);

            using var connection = _tavniyotContext.CreateConnection();

            var versions = (await connection.QueryAsync<FormDetails>(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            )).ToList();

            if (versions.Count == 0)
            {
                throw new ArgumentException($"Form {idRecTavnit} was not found");
            }

            foreach (var version in versions)
            {
                version.IdRecTavnit = idRecTavnit;
            }

            return versions;
        }

        private async Task<List<string>> ValidateFormStructure(FormStructure? form)
        {
            var errors = new List<string>();

            if (form?.Controls == null || form.Controls.Count == 0)
            {
                errors.Add("The form has no controls");
                return errors;
            }

            ValidateCanvasSize(form, errors);

            var smartFields = await GetSmartFieldsList();
            var ids = new HashSet<string>();

            foreach (var control in form.Controls)
            {
                if (string.IsNullOrWhiteSpace(control.Id))
                {
                    errors.Add("A control has no id");
                }
                else if (!ids.Add(control.Id))
                {
                    errors.Add($"Duplicate control id: {control.Id}");
                }

                if (string.IsNullOrWhiteSpace(control.Label))
                {
                    errors.Add($"Control {control.Id} has no label");
                }

                ValidateLayout(control, errors);

                if (control.IsSmartField)
                {
                    ValidateSmartFieldControl(control, smartFields, errors);
                }
                else
                {
                    ValidateBasicControl(control, errors);
                }
            }

            return errors;
        }

        private static void ValidateCanvasSize(FormStructure form, List<string> errors)
        {
            if (form.CanvasWidth <= 0 || form.CanvasHeight <= 0)
            {
                errors.Add("Canvas width and height must be greater than 0");
            }
        }

        private static void ValidateLayout(FormControl control, List<string> errors)
        {
            if (control.X == null || control.Y == null || control.Width == null || control.Height == null)
            {
                errors.Add($"Control {control.Id} must have x, y, width and height");
                return;
            }

            if (control.X < 0 || control.Y < 0)
            {
                errors.Add($"Control {control.Id}: x and y cannot be negative");
            }

            if (control.Width <= 0 || control.Height <= 0)
            {
                errors.Add($"Control {control.Id}: width and height must be greater than 0");
            }
        }

        private static void ValidateSmartFieldControl(FormControl control, List<FormControl> smartFields, List<string> errors)
        {
            FormControl? catalogControl = smartFields.FirstOrDefault(smartField => smartField.SmartFieldKey == control.SmartFieldKey);

            if (catalogControl == null)
            {
                errors.Add($"Smart field {control.SmartFieldKey} was not found or is not active");
                return;
            }

            bool matchesCatalog = control.Type == catalogControl.Type
                && control.Label == catalogControl.Label
                && control.Required == catalogControl.Required
                && control.ReadOnly;

            if (!matchesCatalog)
            {
                errors.Add($"Smart field {control.SmartFieldKey} must match the catalog and be read only");
            }

            if (control.HelpText != null || control.DefaultValue != null)
            {
                errors.Add($"Smart field {control.SmartFieldKey} cannot have help text or a default value");
            }
        }

        private void ValidateBasicControl(FormControl control, List<string> errors)
        {
            if (control.SmartFieldKey != null)
            {
                errors.Add($"Control {control.Id}: a basic control cannot have a smartFieldKey");
            }

            if (!GetBasicControlsList().Any(basicControl => basicControl.Type == control.Type))
            {
                errors.Add($"Control {control.Id}: {control.Type} is not a basic control");
            }

            if (control.ReadOnly)
            {
                errors.Add($"Control {control.Id} cannot be read only");
            }

            if (control.DefaultValue == null)
            {
                return;
            }

            if (control.Type == ControlType.File)
            {
                errors.Add($"Control {control.Id}: a file control cannot have a default value");
            }
            else if (control.Type == ControlType.Date
                && !DateTime.TryParseExact(control.DefaultValue, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out _))
            {
                errors.Add($"Control {control.Id}: the default date must be in the format yyyy-MM-dd");
            }
        }

        // ---- SmartFields ----

        // Regex for a valid data key
        private static readonly Regex DataKeyRegex = new(@"^[A-Za-z][A-Za-z0-9_]*$");
        // Allowed smart field types
        private static readonly string[] AllowedSmartFieldTypes = { "text", "number", "date" };
        // Message for a duplicate data key
        private const string DuplicateKeyMessage = "מפתח נתון זה כבר קיים";

        public async Task<List<SmartField>> GetSmartFieldsAsync(bool onlyActive)
        {
            using var connection = _tavniyotContext.CreateConnection();
            var data = await connection.QueryAsync<SmartField>(
                "GetSmartFields",
                new { OnlyActive = onlyActive },
                commandType: CommandType.StoredProcedure);
            return data.ToList();
        }

        public async Task<SmartField> AddSmartFieldAsync(SmartField field)
        {
            ValidateSmartField(field);
            using var connection = _tavniyotContext.CreateConnection();
            await EnsureDataKeyIsUniqueAsync(connection, field.DataKey, null);

            try
            {
                // The id arrives as 0 and is ignored; the DB creates the new id and returns it
                field.IdRec = await connection.ExecuteScalarAsync<int>(
                    "AddSmartField",
                    new { field.ShemSadeh, field.DataKey, field.Type, field.IsPail },
                    commandType: CommandType.StoredProcedure);
            }
            catch (SqlException ex) when (ex.Number is 2601 or 2627)
            {
                // Unique index on DataKey fired (race between two requests)
                throw new ArgumentException(DuplicateKeyMessage);
            }
            return field;
        }

        public async Task<SmartField> UpdateSmartFieldAsync(int id, SmartField field)
        {
            field.IdRec = id;                      // The id comes from the URL, not from the body
            ValidateSmartField(field);
            using var connection = _tavniyotContext.CreateConnection();
            await EnsureDataKeyIsUniqueAsync(connection, field.DataKey, id);

            int affected;
            try
            {
                affected = await connection.ExecuteScalarAsync<int>(
                    "UpdateSmartField",
                    new { field.IdRec, field.ShemSadeh, field.DataKey, field.Type, field.IsPail },
                    commandType: CommandType.StoredProcedure);
            }
            catch (SqlException ex) when (ex.Number is 2601 or 2627)
            {
                throw new ArgumentException(DuplicateKeyMessage);
            }

            if (affected == 0) throw new KeyNotFoundException("השדה לא נמצא");
            return field;
        }

        public async Task DeleteSmartFieldAsync(int id)
        {
            using var connection = _tavniyotContext.CreateConnection();
            var affected = await connection.ExecuteScalarAsync<int>(
                "DeleteSmartField",
                new { IdRec = id },
                commandType: CommandType.StoredProcedure);

            if (affected == 0) throw new KeyNotFoundException("השדה לא נמצא");
        }

        private static void ValidateSmartField(SmartField? field)
        {
            if (field == null) throw new ArgumentException("נתוני השדה חסרים");

            field.ShemSadeh = (field.ShemSadeh ?? "").Trim();
            field.DataKey = (field.DataKey ?? "").Trim();
            field.Type = (field.Type ?? "").Trim();

            if (field.ShemSadeh.Length == 0)
                throw new ArgumentException("שם שדה הוא שדה חובה");
            if (field.ShemSadeh.Length > 100)
                throw new ArgumentException("שם שדה ארוך מדי (עד 100 תווים)");

            if (field.DataKey.Length == 0)
                throw new ArgumentException("מפתח נתון הוא שדה חובה");
            if (field.DataKey.Length > 100 || !DataKeyRegex.IsMatch(field.DataKey))
                throw new ArgumentException("מפתח נתון חייב להתחיל באות באנגלית ולכלול רק אותיות באנגלית, ספרות וקו תחתון (למשל fullName)");

            if (!AllowedSmartFieldTypes.Contains(field.Type))
                throw new ArgumentException("סוג שדה לא תקין");
        }

        private static async Task EnsureDataKeyIsUniqueAsync(
            IDbConnection connection, string dataKey, int? excludeId)
        {
            var count = await connection.ExecuteScalarAsync<int>(
                "SmartFieldDataKeyExists",
                new { DataKey = dataKey, ExcludeIdRec = excludeId },
                commandType: CommandType.StoredProcedure);

            if (count > 0) throw new ArgumentException(DuplicateKeyMessage);
        }
    }
}