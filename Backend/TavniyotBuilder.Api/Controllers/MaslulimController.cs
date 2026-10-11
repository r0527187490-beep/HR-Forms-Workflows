using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TavniyotBuilder.Api.Interfaces;

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

        // TEST - פונקציה לדוגמה, להעתקה
        [HttpGet("GetMaslulByTavnitIdTEST/{tavnitId}")]
        public async Task<IActionResult> GetMaslulByTavnitIdTEST(int tavnitId)
        {
            try
            {
                var list = await _maslulimRepository.GetMaslulByTavnitIdTEST(tavnitId);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"GetMaslulByTavnitIdTEST Exception: {ex.Message}");
            }
        }
    }
}
