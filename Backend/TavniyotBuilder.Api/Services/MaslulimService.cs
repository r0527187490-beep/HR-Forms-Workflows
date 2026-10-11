using Dapper;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Services
{
    public class MaslulimService : IMaslulimRepository
    {
        private readonly TavniyotBuilderContext _context;

        public MaslulimService(TavniyotBuilderContext context)
        {
            _context = context;
        }

        // TEST - פונקציה לדוגמה, להעתקה
        public async Task<List<Milestone>> GetMaslulByTavnitIdTEST(int tavnitId)
        {
            var sp = "Maslulim_GetMaslulByTavnitId"; // שם הפרוצדורה - להחליף לשם האמיתי ב-DB
            var parameters = new DynamicParameters();
            parameters.Add("@TavnitId", tavnitId);

            using (var connection = _context.CreateConnection())
            {
                var list = await connection.QueryAsync<Milestone>(sp, parameters, commandType: CommandType.StoredProcedure);

                return list.ToList();
            }
        }
    }
}
