using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NMHLogin.Authenticatin;
using System.Text.Json;
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

        [Authorize]
        [HttpPost("PrepareFormForSave")]
        public async Task<IActionResult> PrepareFormForSave(FormStructure form)
        {
            try
            {
                string mivneJson = await _tavniyotRepository.PrepareFormForSave(form);

                return Content(mivneJson, "application/json");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(PrepareFormForSave)} Exception: {ex.Message}");
            }
        }

        [Authorize]
        [HttpPost("RestoreFormStructure")]
        public IActionResult RestoreFormStructure([FromBody] JsonElement mivneJson)
        {
            try
            {
                FormStructure form = _tavniyotRepository.RestoreFormStructure(mivneJson.GetRawText());

                return Ok(form);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(RestoreFormStructure)} Exception: {ex.Message}");
            }
        }

        [Authorize]
        [HttpPost("SaveForm")]
        public async Task<IActionResult> SaveForm(FormDetails formDetails)
        {
            try
            {
                string idUserString = Utils.GetUserId(HttpContext);

                if (!int.TryParse(idUserString, out int idUser))
                {
                    return Unauthorized("Invalid user ID");
                }

                FormDetails savedForm = await _tavniyotRepository.SaveForm(formDetails, idUser);

                return Ok(savedForm);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(SaveForm)} Exception: {ex.Message}");
            }
        }

        [Authorize]
        [HttpGet("GetForm")]
        public async Task<IActionResult> GetForm(int idRecTavnit)
        {
            try
            {
                FormDetails formDetails = await _tavniyotRepository.GetForm(idRecTavnit);

                return Ok(formDetails);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{nameof(GetForm)} Exception: {ex.Message}");
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