using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TavniyotBuilder.Api.Interfaces;

namespace TavniyotBuilder.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TavniyotController : ControllerBase
    {
        private readonly ITavniyotRepository _tavniyotRepository;

        public TavniyotController(ITavniyotRepository tavniyotRepository)
        {
            _tavniyotRepository = tavniyotRepository;
        }

        // TEST - פונקציה לדוגמה, להעתקה
        [HttpGet("GetAllTavniyotTEST")]
        public async Task<IActionResult> GetAllTavniyotTEST()
        {
            try
            {
                var list = await _tavniyotRepository.GetAllTavniyotTEST();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"GetAllTavniyotTEST Exception: {ex.Message}");
            }
        }
    }
}
