using Dapper;
using System.Data;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;
using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Services
{
    public class TavniyotService : ITavniyotRepository
    {
        private static readonly Dictionary<string, ControlType> ControlTypeByDataKey = new()
        {
            { "EmployeeName", ControlType.HR_Name },
            { "EmployeeId", ControlType.HR_Id },
            { "Department", ControlType.HR_Department }
        };

        private readonly TavniyotBuilderContext _tavniyotContext;
        public TavniyotService(TavniyotBuilderContext tavniyotContext)
        {
            _tavniyotContext = tavniyotContext;
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

        public async Task<List<FormControl>> GetSmartFieldsList()
        {
            var sp = "GetSmartFields";
            using var connection = _tavniyotContext.CreateConnection();

            var smartFields = await connection.QueryAsync<SmartField>(
                sql: sp,
                commandType: CommandType.StoredProcedure
            );

            var controls = new List<FormControl>();

            foreach (var smartField in smartFields)
            {
                if (!ControlTypeByDataKey.TryGetValue(smartField.DataKey, out ControlType controlType))
                {
                    continue;
                }

                controls.Add(new FormControl
                {
                    Id = ToCamelCase(smartField.DataKey),
                    Type = controlType,
                    Label = smartField.ShemSadeh,
                    Required = false,
                    SmartFieldKey = smartField.DataKey,
                    ReadOnly = true
                });
            }

            return controls;
        }

        private static string ToCamelCase(string value)
        {
            return char.ToLowerInvariant(value[0]) + value.Substring(1);
        }

    }
}
