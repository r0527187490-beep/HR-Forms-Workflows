using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

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

        [HttpGet("GetAllTavniyotTEST")]
        public async Task<IActionResult> GetAllTavniyotTEST()
        {
            try
            {
                List<Tavnit> tavniyot = await _tavniyotRepository.GetAllTavniyotTEST();

                return Ok(tavniyot);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetAllTavniyotTEST)} Exception: {ex.Message}");
            }
        }

        [HttpGet("GetCodTeurTavniyotTEST")]
        public async Task<IActionResult> GetCodTeurTavniyotTEST()
        {
            try
            {
                List<CodTeur> codTeurList = await _tavniyotRepository.GetCodTeurTavniyotTEST();

                return Ok(codTeurList);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetCodTeurTavniyotTEST)} Exception: {ex.Message}");
            }
        }


    }
}
