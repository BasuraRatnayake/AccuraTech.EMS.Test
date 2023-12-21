using System;
using AccuraTech.EMS.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AccuraTech.EMS.API.Services;

public class DatabaseService : DbContext {
	protected const string DB_NAME = "accuratech.ems.db";
	protected string DB_PATH {
		get {
			return Path.Combine(AppDomain.CurrentDomain.BaseDirectory, DB_NAME);
		}
	}

	public DbSet<Employee> Employees { get; set; }
	public DbSet<Department> Departments { get; set; }


	public DatabaseService() { }


	protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite($"Data Source={DB_PATH}");
}
