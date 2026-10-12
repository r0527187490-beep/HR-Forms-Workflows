using Microsoft.Data.SqlClient;
using System.Data;

namespace TavniyotBuilder.Api.DbContext
{
    public class TavniyotBuilderContext
    {
        private readonly string _connectionString;
        private readonly IConfiguration _configuration;

        public TavniyotBuilderContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("TavniyotBuilderCon");
        }

        public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
    }
}
