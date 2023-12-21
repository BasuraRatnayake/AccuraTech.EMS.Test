using AccuraTech.EMS.API.Models;
using AccuraTech.EMS.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace AccuraTech.EMS.API.Controllers;

[Route("api/[controller]")]
public class DepartmentController : Controller {
	private DepartmentService service;

	public DepartmentController(DepartmentService service) {
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
	public async Task<ActionResult> Post([FromBody] Department data) {
		try {
			return Ok(await service.Add(data));
		} catch (Exception) {
			return BadRequest();
		}
	}

	[HttpPut]
	public async Task<ActionResult> Put([FromBody] Department data) {
		try {
			return Ok(await service.Update(data));
		} catch (Exception) {
			return BadRequest();
		}
	}

	[HttpDelete]
	public async Task<ActionResult> Delete(Department data) {
		try {
			await service.Remove(data);

			return Ok("Employee Removed");
		} catch (Exception) {
			return BadRequest();
		}
	}
}

