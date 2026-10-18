using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class FormControl
    {
        public string Id { get; set; } = string.Empty;
        public ControlType Type { get; set; }
        public string Label { get; set; } = string.Empty;
        public bool Required { get; set; }
        public string? SmartFieldKey { get; set; }
        public bool ReadOnly { get; set; }
        public string? HelpText { get; set; }                          
        public string? DefaultValue { get; set; }                       
        public double? X { get; set; }                                
        public double? Y { get; set; }                                
        public double? Width { get; set; }                             
        public double? Height { get; set; }                           
    }
}
