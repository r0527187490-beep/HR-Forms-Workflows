namespace TavniyotBuilder.Api.Models
{
    public class Tavnit
    {
        public int IdRec { get; set; }
        public string ShemTofes { get; set; } = string.Empty;
        public string? Teur { get; set; }
        public bool IsPail { get; set; }
        public DateTime? TokefMe { get; set; }
        public DateTime? TokefAd { get; set; }
        public int IdYotzer { get; set; }
        public bool IsKolelShdotChachamim { get; set; }
    }
}
