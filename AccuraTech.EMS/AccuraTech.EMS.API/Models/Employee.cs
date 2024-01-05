using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AccuraTech.EMS.API.Models;

public enum EmployeeGender {
	Male,
	Female
}

public class Employee {
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int? Id { get; set; }
	public required string FirstName { get; set; }
	public required string LastName { get; set; }
	public required EmployeeGender Gender { get; set; }
	public required DateOnly DateOfBirth { get; set; }
	public required string Address { get; set; }
	public required decimal Salary { get; set; }
	public required int Department { get; set; }
	public string? DepartmentName { get; set; }
}
