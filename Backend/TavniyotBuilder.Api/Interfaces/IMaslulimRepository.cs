using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface IMaslulimRepository
    {
        // TEST - פונקציה לדוגמה, להעתקה
        Task<List<Milestone>> GetMaslulByTavnitIdTEST(int tavnitId);
    }
}
