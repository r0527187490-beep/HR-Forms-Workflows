using TavniyotBuilder.Api.Models.Enums;

namespace TavniyotBuilder.Api.Models
{
    public class Milestone
    {
        public int Id { get; set; }
        public int TavnitId { get; set; }
        public int StepNumber { get; set; }
        public ApproverType ApproverType { get; set; }
        public string AllowedActions { get; set; } = string.Empty;
    }
}
