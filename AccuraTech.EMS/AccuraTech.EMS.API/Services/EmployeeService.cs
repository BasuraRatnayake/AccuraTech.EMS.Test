using System;
using System.Linq;
using AccuraTech.EMS.API.Models;
using AccuraTech.EMS.API.Services;
using Microsoft.EntityFrameworkCore;

namespace AccuraTech.EMS.API.Services;

public class EmployeeService {
	private DatabaseService database = new DatabaseService();
	private DepartmentService departments = new DepartmentService();

	public async Task<Employee> LastInserted() {
		try {
			return await database.Employees
				.AsQueryable()
				.OrderByDescending(e => e.Id)
				.Take(1)
				.FirstOrDefaultAsync();
		} catch (Exception ex) {
			throw;
		}
	}

	public async Task<Employee> Add(Employee data) {
		try {
			data.Id = null;

			Department dept = await departments.GetById(data.Department);
			if (dept == null)
				throw new Exception($"No Such Department Found: {data.Department}");

			database.Employees.Add(data);
			await database.SaveChangesAsync();

			return await LastInserted();
		} catch (Exception) {
			throw;
		}
	}

	public async Task<List<Employee>> Get() {
		try {
			return await database.Employees.OrderByDescending(e => e.Id).ToListAsync();
		} catch (Exception) {
			throw;
		}
	}
	public async Task<Employee> GetById(int id) {
		try {
			return await database.Employees.FirstOrDefaultAsync(e => e.Id == id);
		} catch (Exception ex) {
			throw;
		}
	}

	public async Task<Employee> Update(Employee data) {
		try {
			database.Employees.Update(data);
			await database.SaveChangesAsync();

			return data;
		} catch (Exception) {
			throw;
		}
	}

	public async Task<bool> Remove(Employee data) {
		try {
			database.Employees.Remove(data);
			await database.SaveChangesAsync();

			return true;
		} catch (Exception) {
			throw;
		}
	}
}
