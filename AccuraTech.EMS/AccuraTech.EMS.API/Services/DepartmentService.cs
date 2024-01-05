using System;
using AccuraTech.EMS.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AccuraTech.EMS.API.Services;

public class DepartmentService {
	private DatabaseService database = new DatabaseService();

	public async Task<Department> LastInserted() {
		try {
			return await database.Departments
				.AsQueryable()
				.OrderByDescending(e => e.Id)
				.Take(1)
				.FirstOrDefaultAsync();
		} catch (Exception ex) {
			throw;
		}
	}

	public async Task<Department> Add(Department data) {
		try {
			data.Id = null;

			database.Departments.Add(data);
			await database.SaveChangesAsync();

			return await LastInserted();
		} catch (Exception ex) {
			throw;
		}
	}

	public async Task<List<Department>> Get() {
		try {
			return await database.Departments.OrderByDescending(e => e.Id).ToListAsync();
		} catch (Exception) {
			throw;
		}
	}
	public async Task<Department> GetById(int id) {
		try {
			return await database.Departments.FirstOrDefaultAsync(e => e.Id == id);
		} catch (Exception ex) {
			throw;
		}
	}

	public async Task<Department> Update(Department data) {
		try {
			database.Departments.Update(data);
			await database.SaveChangesAsync();

			return data;
		} catch (Exception) {
			throw;
		}
	}

	public async Task<bool> Remove(Department data) {
		try {
			database.Departments.Remove(data);
			await database.SaveChangesAsync();

			return true;
		} catch (Exception) {
			throw;
		}
	}
}

