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
        HR_Name,
        HR_Id,
        HR_Department,
        Number
    }
}
