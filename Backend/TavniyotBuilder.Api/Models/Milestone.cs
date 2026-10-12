using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class Milestone
    {
        public int IdRec { get; set; }
        public int IdRecTofesVersion { get; set; }
        public int SederShalav { get; set; }
        public string ShemShalav { get; set; } = string.Empty;
        public ApproverType SugMaasher { get; set; }
        public string? IdsMaasher { get; set; }
        public string Peulot { get; set; } = string.Empty;
        public string? IdEvenDerechHaczara { get; set; }
    }
}
