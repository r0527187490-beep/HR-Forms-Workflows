namespace TavniyotBuilder.Api.Models
{
    public class FormDetails
    {
        public int? IdRecTavnit { get; set; }                 
        public string ShemTofes { get; set; } = string.Empty;  
        public string? Teur { get; set; }                      
        public int? IdRecTofesVersion { get; set; }            
        public int? MisparGirsa { get; set; }                 
        public FormStructure? Form { get; set; }               
    }
}
