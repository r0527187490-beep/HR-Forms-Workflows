namespace TavniyotBuilder.Api.Models
{
    public class SmartField
    {
        public int IdRec { get; set; }
        public string ShemSadeh { get; set; } = string.Empty;
        public string DataKey { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;              
        public bool IsPail { get; set; }
    }
}
