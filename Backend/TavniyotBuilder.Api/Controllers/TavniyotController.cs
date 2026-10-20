using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NMHLogin.Authenticatin;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Models;
using TavniyotBuilder.Api.Services;

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

        // ---------------- SmartFields ----------------
        [Authorize]
        [HttpGet("smart-fields")]
        public async Task<IActionResult> GetSmartFields([FromQuery] bool onlyActive = false)
        {
            try { return Ok(await _tavniyotRepository.GetSmartFieldsAsync(onlyActive)); }
            catch (Exception ex) { return ServerError(nameof(GetSmartFields), ex); }
        }

        [Authorize]
        [HttpPost("smart-fields")]
        public async Task<IActionResult> AddSmartField([FromBody] SmartField field)
        {
            try { return Ok(await _tavniyotRepository.AddSmartFieldAsync(field)); }
            catch (ArgumentException ex) { return BadRequest(new { message = ex.Message }); }
            catch (Exception ex) { return ServerError(nameof(AddSmartField), ex); }
        }

        [Authorize]
        [HttpPut("smart-fields/{id:int}")]
        public async Task<IActionResult> UpdateSmartField(int id, [FromBody] SmartField field)
        {
            try { return Ok(await _tavniyotRepository.UpdateSmartFieldAsync(id, field)); }
            catch (ArgumentException ex) { return BadRequest(new { message = ex.Message }); }
            catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
            catch (Exception ex) { return ServerError(nameof(UpdateSmartField), ex); }
        }

        [Authorize]
        [HttpDelete("smart-fields/{id:int}")]
        public async Task<IActionResult> DeleteSmartField(int id)
        {
            try { await _tavniyotRepository.DeleteSmartFieldAsync(id); return NoContent(); }
            catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
            catch (Exception ex) { return ServerError(nameof(DeleteSmartField), ex); }
        }

        // Unexpected error (e.g. database down): 500 in the same { message } shape
        // the client already receives for 400 / 404, in the same style as the existing endpoint.
        private IActionResult ServerError(string action, Exception ex)
            => StatusCode(500, new { message = $"{action} Exception: {ex.Message}" });
    }
}