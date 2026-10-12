using NMHLogin;
using TavniyotBuilder.Api.DbContext;
using TavniyotBuilder.Api.Interfaces;
using TavniyotBuilder.Api.Services;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

var customApp = new CustomWebApplicationBuilder(builder, configuration);
builder = customApp.Builder;

builder.Services.AddSingleton<TavniyotBuilderContext>();
builder.Services.AddScoped<ITavniyotRepository, TavniyotService>();
builder.Services.AddScoped<IMaslulimRepository, MaslulimService>();

builder.Services.AddControllers();

builder.Services.AddCors(o => o.AddPolicy("MyPolicy", policyBuilder =>
{
    policyBuilder.AllowAnyOrigin()
                 .AllowAnyMethod()
                 .AllowAnyHeader();
}));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("MyPolicy");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
