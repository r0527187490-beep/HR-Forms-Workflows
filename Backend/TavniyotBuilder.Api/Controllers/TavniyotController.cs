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
        [HttpGet("GetSmartFieldsList")]
        public async Task<IActionResult> GetSmartFieldsList()
        {
            try
            {
                List<FormControl> smartFields = await _tavniyotRepository.GetSmartFieldsList();

                return Ok(smartFields);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetSmartFieldsList)} Exception: {ex.Message}");
            }
        }

        [Authorize]
        [HttpGet("GetBasicControlsList")]
        public IActionResult GetBasicControlsList()
        {
            try
            {
                List<FormControl> basicControls = _tavniyotRepository.GetBasicControlsList();

                return Ok(basicControls);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetBasicControlsList)} Exception: {ex.Message}");
            }
        }

    }
}