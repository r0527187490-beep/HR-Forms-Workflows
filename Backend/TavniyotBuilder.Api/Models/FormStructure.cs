namespace TavniyotBuilder.Api.Models
{
    public class FormStructure
    {
        public List<FormControl> Controls { get; set; } = new();
        public double? CanvasWidth { get; set; }    
        public double? CanvasHeight { get; set; }   
    }
}
