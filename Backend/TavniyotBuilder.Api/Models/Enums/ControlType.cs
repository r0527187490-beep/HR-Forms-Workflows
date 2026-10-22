using System.Text.Json.Serialization;

namespace TavniyotBuilder.Api.Models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ControlType
    {
        Text,
        Paragraph,
        Date,
        File,
        Number
    }
}
