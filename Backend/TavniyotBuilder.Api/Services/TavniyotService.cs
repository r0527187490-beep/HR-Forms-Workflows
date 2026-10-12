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
    }
}
