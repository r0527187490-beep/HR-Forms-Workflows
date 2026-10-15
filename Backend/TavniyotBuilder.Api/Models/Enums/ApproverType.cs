using System.Text.Json.Serialization;

namespace TavniyotBuilder.Api.Models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ApproverType
    {
        DirectManager,
        SpecificRole,
        SpecificUser
    }
}
