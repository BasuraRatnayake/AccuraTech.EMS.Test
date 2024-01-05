using AccuraTech.EMS.API.Models;
using AccuraTech.EMS.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace AccuraTech.EMS.API.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
[Produces("application/json")]
public class EmployeeController : Controller {
	private EmployeeService service;

	public EmployeeController(EmployeeService service) {
		this.service = service;
	}

	[HttpGet]
	public async Task<ActionResult> Get() {
		try {
			return Ok(await service.Get());
		} catch (Exception) {
			return BadRequest();
		}
	}
	[HttpGet("{id}")]
	public async Task<ActionResult> Get(int id) {
		try {
			return Ok(await service.GetById(id));
		} catch (Exception) {
			return BadRequest();
		}
	}

	[HttpPost]
	public async Task<ActionResult> Post([FromBody] Employee data) {
		try {
			return Ok(await service.Add(data));
		} catch (Exception) {
			return BadRequest();
		}
	}

	[HttpPut]
	public async Task<ActionResult> Put([FromBody] Employee data) {
		try {
			return Ok(await service.Update(data));
		} catch (Exception) {
			return BadRequest();
		}
	}

	[HttpDelete]
	public async Task<ActionResult> Delete(Employee data) {
		try {
			await service.Remove(data);

			return Ok("Employee Removed");
		} catch (Exception) {
			return BadRequest();
		}
	}
}
