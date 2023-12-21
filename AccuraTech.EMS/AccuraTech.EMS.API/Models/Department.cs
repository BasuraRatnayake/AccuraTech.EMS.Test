using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccuraTech.EMS.API.Models;

public class Department {
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int? Id { get; set; }

	public string Name { get; set; }
}
