using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface ITavniyotRepository
    {
        Task<List<CodTeur>> GetCodTeurTavniyotTEST();

        // בודק ומנקה HTML לפני שמירה. זורק ArgumentException אם הקלט לא תקין.
        string Clean(string html);
        Task<List<SmartField>> GetSmartFieldsAsync(bool onlyActive);
        Task<SmartField> AddSmartFieldAsync(SmartField field);
        Task<SmartField> UpdateSmartFieldAsync(int id, SmartField field);
        Task DeleteSmartFieldAsync(int id);

    }
}
