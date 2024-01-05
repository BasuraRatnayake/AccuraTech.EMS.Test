using AccuraTech.EMS.API.Services;

var builder = WebApplication.CreateBuilder(args);

var AllowAccessToGUI = "AllowAccessToGUI";

builder.Services.AddCors();

builder.Services.AddCors(options => {
	options.AddPolicy(name: AllowAccessToGUI,
		policy => {
			policy.WithOrigins("*")
			.AllowAnyHeader()
			.AllowAnyMethod();
		}
	);
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<DepartmentService>();
builder.Services.AddSingleton<EmployeeService>();

builder.Services.AddControllers().AddJsonOptions(options => {
	options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(x => x
				.AllowAnyMethod()
				.AllowAnyHeader()
				.SetIsOriginAllowed(origin => true) // allow any origin
				.AllowCredentials()); // allow credentials

app.MapControllers();

app.Run();
