using System.Text.Json.Serialization;

namespace TavniyotBuilder.Api.Models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ApprovalAction
    {
        Approve = 1,
        Reject = 2,
        Return = 3
    }
}
