using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Interfaces
{
    public interface ITavniyotRepository
    {
        Task<List<CodTeur>> GetCodTeurTavniyotTEST();
        Task<List<FormControl>> GetSmartFieldsList();
        List<FormControl> GetBasicControlsList();
        Task<string> PrepareFormForSave(FormStructure form);
        FormStructure RestoreFormStructure(string mivneJson);
        Task<FormDetails> SaveForm(FormDetails formDetails, int idYotzer);
        Task<FormDetails> GetForm(int idRecTavnit);
    }
}
