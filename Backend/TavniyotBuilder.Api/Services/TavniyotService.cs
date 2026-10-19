using Dapper;
using Ganss.Xss;
using System.Data;
using System.Text.RegularExpressions;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;
using System.Text.RegularExpressions;
using Microsoft.Data.SqlClient;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private readonly TavniyotBuilderContext _tavniyotContext;
        private readonly HtmlSanitizer _sanitizer;
        // (הצעה לאורך מקסימלי כדי לא להעמיס על השרת (ניתן לשינוי
        private const int MaxHtmlLength = 1_000_000;

        public TavniyotService(TavniyotBuilderContext tavniyotContext)
        {
            _tavniyotContext = tavniyotContext;
            _sanitizer = new HtmlSanitizer();
        }

        public string Clean(string html)
        {
            if (string.IsNullOrWhiteSpace(html))
                throw new ArgumentException("ה-HTML לא יכול להיות ריק.");

            if (html.Length > MaxHtmlLength)
                throw new ArgumentException("ה-HTML ארוך מדי.");

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

        // ---- SmartFields ----

        // אותו Regex כמו בצד הלקוח של חדוה
        private static readonly Regex DataKeyRegex = new(@"^[A-Za-z][A-Za-z0-9_]*$");
        // הרשימה במקום אחד. אם יתווספו סוגים בעתיד, מעדכנים רק כאן
        private static readonly string[] AllowedSmartFieldTypes = { "text", "number", "date" };
        // אותו טקסט כמו אצל חדוה, כדי שההודעה תהיה זהה
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
                // ה-id שהלקוח שלח (0) מתעלמים ממנו. ה-DB מייצר id אמיתי ומחזיר אותו
                field.IdRec = await connection.ExecuteScalarAsync<int>(
                    "AddSmartField",
                    new { field.ShemSadeh, field.DataKey, field.Type, field.IsPail },
                    commandType: CommandType.StoredProcedure);
            }
            catch (SqlException ex) when (ex.Number is 2601 or 2627)
            {
                // שני משתמשים הוסיפו אותו DataKey באותו רגע, והאינדקס הייחודי חסם
                throw new ArgumentException(DuplicateKeyMessage);
            }
            return field;
        }

        public async Task<SmartField> UpdateSmartFieldAsync(int id, SmartField field)
        {
            field.IdRec = id;                      // ה-id נלקח מה-URL, לא מגוף הבקשה
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
            if (field == null) throw new ArgumentException("הבקשה ריקה");

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
                throw new ArgumentException("באנגלית בלבד, מתחיל באות, בלי רווחים (למשל fullName)");

            if (!AllowedSmartFieldTypes.Contains(field.Type))
                throw new ArgumentException("סוג פקד לא תקין");
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
