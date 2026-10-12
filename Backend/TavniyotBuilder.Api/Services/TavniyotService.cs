using Dapper;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private readonly TavniyotBuilderContext _context;

        public TavniyotService(TavniyotBuilderContext context)
        {
            _context = context;
        }

        public async Task<List<Tavnit>> GetAllTavniyotTEST()
        {
            var sp = "GetAllTavniyot";
            using var connection = _context.CreateConnection();

            var tavniyot = await connection.QueryAsync<Tavnit>(
                sql: sp,
                commandType: CommandType.StoredProcedure
            );

            return tavniyot.ToList();
        }

        // מכיוון שהערכים החוזרים מהפרוצדורה הם בשמות שונים (CodTofes ו-NameTofes)
        // לעומת השמות במודל (Cod ו-Teur), אין צורך לפתוח מודל חדש. 
        // במקום זאת, מבצעים foreach וממפים ישירות:
        // Cod = item.CodTofes, Teur = item.NameTofes
        public async Task<List<CodTeur>> GetCodTeurTavniyotTEST()
        {
            var sp = "GetCodTeurTavniyot";
            using var connection = _context.CreateConnection();

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
