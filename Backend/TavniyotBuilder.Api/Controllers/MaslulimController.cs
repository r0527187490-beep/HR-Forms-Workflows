using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class MaslulimController : ControllerBase
    {
        private readonly IMaslulimRepository _maslulimRepository;

        public MaslulimController(IMaslulimRepository maslulimRepository)
        {
            _maslulimRepository = maslulimRepository;
        }

        [HttpGet("GetMaslulByTofesVersionTEST")]
        public async Task<IActionResult> GetMaslulByTofesVersionTEST(int idRecTofesVersion)
        {
            try
            {
                List<EvenDerech> milestones = await _maslulimRepository.GetMaslulByTofesVersionTEST(idRecTofesVersion);

                return Ok(milestones);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetMaslulByTofesVersionTEST)} Exception: {ex.Message}");
            }
        }
    }
}
