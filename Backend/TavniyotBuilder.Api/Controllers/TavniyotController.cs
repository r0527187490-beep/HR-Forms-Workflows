using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NMHLogin.Authenticatin;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;

namespace TavniyotBuilder.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TavniyotController : ControllerBase
    {
        private readonly ITavniyotRepository _tavniyotRepository;

        public TavniyotController(ITavniyotRepository tavniyotRepository)
        {
            _tavniyotRepository = tavniyotRepository;
        }

        [Authorize]
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

        [Authorize]
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

        [Authorize]
        [HttpGet("GetTavniyotByYotzerTEST")]
        public async Task<IActionResult> GetTavniyotByYotzerTEST()
        {
            try
            {
                string idUserString = Utils.GetUserId(HttpContext);

                if (!int.TryParse(idUserString, out int idUser))
                {
                    return Unauthorized("Invalid user ID");
                }

                List<Tavnit> tavniyot = await _tavniyotRepository.GetTavniyotByYotzerTEST(idUser);

                return Ok(tavniyot);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetTavniyotByYotzerTEST)} Exception: {ex.Message}");
            }
        }
    }
}