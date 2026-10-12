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

        public async Task<List<Milestone>> GetMaslulByTofesVersionTEST(int idRecTofesVersion)
        {
            var sp = "GetMaslulByTofesVersion";
            var parameters = new DynamicParameters();
            parameters.Add("@IdRecTofesVersion", idRecTofesVersion, DbType.Int32);

            using var connection = _context.CreateConnection();

            var milestones = await connection.QueryAsync<Milestone>(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            );

            return milestones.ToList();
        }
    }
}
