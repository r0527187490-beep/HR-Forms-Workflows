using Dapper;
using Ganss.Xss;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

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
  
    }
}
