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

        // TEST - פונקציה לדוגמה, להעתקה
        public async Task<List<Tavnit>> GetAllTavniyotTEST()
        {
            var sp = "Tavniyot_GetAllTavniyot"; // שם הפרוצדורה - להחליף לשם האמיתי ב-DB

            using (var connection = _context.CreateConnection())
            {
                var list = await connection.QueryAsync<Tavnit>(sp, commandType: CommandType.StoredProcedure);

                return list.ToList();
            }
        }
    }
}
