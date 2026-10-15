using Dapper;
using System.Data;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;
using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private static readonly Dictionary<string, ControlType> ControlTypeByDataKey = new()
        {
            { "EmployeeName", ControlType.HR_Name },
            { "EmployeeId", ControlType.HR_Id },
            { "Department", ControlType.HR_Department }
        };

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
                commandType: CommandType.StoredProcedure
            );

            var controls = new List<FormControl>();

            foreach (var smartField in smartFields)
            {
                if (!ControlTypeByDataKey.TryGetValue(smartField.DataKey, out ControlType controlType))
                {
                    continue;
                }

                controls.Add(new FormControl
                {
                    Id = ToCamelCase(smartField.DataKey),
                    Type = controlType,
                    Label = smartField.ShemSadeh,
                    Required = false,
                    SmartFieldKey = smartField.DataKey,
                    ReadOnly = true
                });
            }

            return controls;
        }

        private static string ToCamelCase(string value)
        {
            return char.ToLowerInvariant(value[0]) + value.Substring(1);
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

        private async Task<List<string>> ValidateFormStructure(FormStructure? form)
        {
            var errors = new List<string>();

            if (form?.Controls == null || form.Controls.Count == 0)
            {
                errors.Add("The form has no controls");
                return errors;
            }

            var smartFields = await GetSmartFieldsList();
            var ids = new HashSet<string>();
            var smartFieldKeys = new HashSet<string>();

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

                if (control.SmartFieldKey != null)
                {
                    ValidateSmartFieldControl(control, smartFields, smartFieldKeys, errors);
                }
                else
                {
                    ValidateBasicControl(control, errors);
                }
            }

            return errors;
        }

        private static void ValidateSmartFieldControl(FormControl control, List<FormControl> smartFields, HashSet<string> smartFieldKeys, List<string> errors)
        {
            FormControl? catalogControl = smartFields.FirstOrDefault(smartField => smartField.SmartFieldKey == control.SmartFieldKey);

            if (catalogControl == null)
            {
                errors.Add($"Smart field {control.SmartFieldKey} was not found or is not active");
                return;
            }

            if (!smartFieldKeys.Add(control.SmartFieldKey!))
            {
                errors.Add($"Smart field {control.SmartFieldKey} appears more than once");
            }

            bool matchesCatalog = control.Id == catalogControl.Id
                && control.Type == catalogControl.Type
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

    }
}
