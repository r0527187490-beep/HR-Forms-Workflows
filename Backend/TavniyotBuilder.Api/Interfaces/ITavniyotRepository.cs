using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface ITavniyotRepository
    {
        Task<List<Tavnit>> GetAllTavniyotTEST();
    }
}
