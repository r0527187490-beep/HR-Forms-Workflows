using Dapper;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private readonly TavniyotBuilderContext _tavniyotContext;

        public TavniyotService(TavniyotBuilderContext tavniyotContext)
        {
            _tavniyotContext = tavniyotContext;
        }

        public async Task<List<Tavnit>> GetAllTavniyotTEST()
        {
            var sp = "GetAllTavniyot";
            using var connection = _tavniyotContext.CreateConnection();

            var tavniyot = await connection.QueryAsync<Tavnit>(
                sql: sp,
                commandType: CommandType.StoredProcedure
            );

            return tavniyot.ToList();
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
        public async Task<List<Tavnit>> GetTavniyotByYotzerTEST(int idYotzer)
        {
            var sp = "GetTavniyotByYotzer";
            var parameters = new DynamicParameters();
            parameters.Add("@IdYotzer", idYotzer, DbType.Int32);

            using var connection = _tavniyotContext.CreateConnection();

            var tavniyot = await connection.QueryAsync<Tavnit>(
                sql: sp,
                param: parameters,
                commandType: CommandType.StoredProcedure
            );

            return tavniyot.ToList();
        }
    }
}
