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
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public EmployeeGender Gender { get; set; }
	public DateOnly DateOfBirth { get; set; }
	public string Address { get; set; }
	public decimal Salary { get; set; }
	public int Department { get; set; }
}
