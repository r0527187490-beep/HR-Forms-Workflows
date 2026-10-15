using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class Tofes
    {
        public int IdRec { get; set; }
        public int IdRecTofesVersion { get; set; }
        public int IdOved { get; set; }
        public DateTime DtHagasha { get; set; }
        public RequestStatus StatusBakasha { get; set; }
        public int? IdRecCurrentEvenDerech { get; set; }              
        public string? TshuvotJson { get; set; }
    }
}
