using Microsoft.Data.SqlClient;
using System.Data;

namespace TavniyotBuilder.Api.DbContext
{
    public class TavniyotBuilderContext
    {
        private readonly string _connectionString;

        public TavniyotBuilderContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("TavniyotBuilderCon") ?? string.Empty;
        }

        public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
    }
}
