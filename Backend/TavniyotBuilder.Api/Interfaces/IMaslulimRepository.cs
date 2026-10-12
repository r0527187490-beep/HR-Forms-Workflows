using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface IMaslulimRepository
    {
        Task<List<Milestone>> GetMaslulByTofesVersionTEST(int idRecTofesVersion);
    }
}
