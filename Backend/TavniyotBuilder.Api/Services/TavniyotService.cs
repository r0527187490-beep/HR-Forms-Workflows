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
        private const string GetAllTavniyotSp = "GetAllTavniyot";

        public TavniyotService(TavniyotBuilderContext context)
        {
            _context = context;
        }

        public async Task<List<Tavnit>> GetAllTavniyotTEST()
        {
            using var connection = _context.CreateConnection();

            var tavniyot = await connection.QueryAsync<Tavnit>(
                sql: GetAllTavniyotSp,
                commandType: CommandType.StoredProcedure
            );

            return tavniyot.ToList();
        }

        public async Task<List<CodTeur>> GetCodTeurTavniyotTEST()
        {
            using var connection = _context.CreateConnection();

            var tavniyot = await connection.QueryAsync<Tavnit>(
                sql: GetAllTavniyotSp,
                commandType: CommandType.StoredProcedure
            );

            var codTeurList = new List<CodTeur>();

            foreach (var tavnit in tavniyot)
            {
                if (tavnit.IsPail)
                {
                    codTeurList.Add(new CodTeur
                    {
                        Cod = tavnit.IdRec,
                        Teur = tavnit.ShemTofes
                    });
                }
            }

            return codTeurList;
        }
    }
}
