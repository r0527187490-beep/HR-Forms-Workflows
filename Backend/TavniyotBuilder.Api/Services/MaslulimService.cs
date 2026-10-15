using Dapper;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Services
{
    public class MaslulimService : IMaslulimRepository
    {
        private readonly TavniyotBuilderContext _tavniyotContext;

        public MaslulimService(TavniyotBuilderContext tavniyotContext)
        {
            _tavniyotContext = tavniyotContext;
        }

        public async Task<List<EvenDerech>> GetMaslulByTofesVersionTEST(int idRecTofesVersion)
        {
            var sp = "GetMaslulByTofesVersion";
            var parameters = new DynamicParameters();
            parameters.Add("@IdRecTofesVersion", idRecTofesVersion, DbType.Int32);

            using var connection = _tavniyotContext.CreateConnection();

            var milestones = await connection.QueryAsync<EvenDerech>(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            );

            return milestones.ToList();
        }
    }
}
