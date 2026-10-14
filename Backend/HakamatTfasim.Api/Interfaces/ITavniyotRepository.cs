using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface ITavniyotRepository
    {
        Task<List<Tavnit>> GetAllTavniyotTEST();
        Task<List<CodTeur>> GetCodTeurTavniyotTEST();
        Task<List<Tavnit>> GetTavniyotByYotzerTEST(int idYotzer);
    }
}
