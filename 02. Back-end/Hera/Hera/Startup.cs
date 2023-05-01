using Hera.Services;
using Hera.Data.Context;
using Hera.Domain.Entity;
using Microsoft.OpenApi.Models;
using Hera.Persistence.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Hera
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services)
        {
            #region Context
            services.AddDbContext<DataContext>(context => context.UseSqlite(Configuration.GetConnectionString("SQLite")));
            #endregion

            #region Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Hera", Version = "v1" });
            });
            #endregion

            #region Controller
            services.AddControllers();
            #endregion

            #region Service
            services.AddServiceConfiguration();
            #endregion

            #region Repository
            services.AddRepositoryConfiguration();
            #endregion

            #region FluentValidation
            services.AddFluentValidationConfiguration();
            #endregion

            #region AutoMapper
            services.AddAutoMapperConfiguration();
            #endregion

            #region ApiVersioning
            services.AddApiVersioning();
            #endregion

            #region Cors
            services.AddCors();
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Hera v1"));
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(cors => cors.AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .AllowAnyOrigin());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
