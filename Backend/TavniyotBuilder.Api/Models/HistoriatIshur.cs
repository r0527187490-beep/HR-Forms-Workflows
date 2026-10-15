using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class HistoriatIshur
    {
        public int IdRec { get; set; }
        public int IdRecTofes { get; set; }
        public int IdRecEvenDerech { get; set; }
        public int IdMeasher { get; set; }
        public ApprovalAction SugIshur { get; set; }
        public string? Heara { get; set; }
        public DateTime DtPeula { get; set; }
    }
}
