using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class FormControl
    {
        public int Id { get; set; }
        public int TavnitId { get; set; }
        public ControlType ControlType { get; set; }
        public string Label { get; set; } = string.Empty;
    }
}
