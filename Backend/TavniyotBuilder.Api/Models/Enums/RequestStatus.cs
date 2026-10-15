using System.Text.Json.Serialization;

namespace TavniyotBuilder.Api.Models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RequestStatus
    {
        Pending,
        Approved,
        Rejected,
        Returned
    }
}
