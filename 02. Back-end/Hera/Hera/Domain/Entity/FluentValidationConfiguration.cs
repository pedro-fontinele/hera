using FluentValidation;
using Hera.Domain.Entity.Dto;
using FluentValidation.AspNetCore;
using Hera.Domain.Entity.Validator;
using Microsoft.Extensions.DependencyInjection;

namespace Hera.Domain.Entity
{
    public static class FluentValidationConfiguration
    {
        public static void AddFluentValidationConfiguration (this IServiceCollection services)
        {
            services.AddFluentValidationAutoValidation();
            services.AddScoped<IValidator<ProductDto>, ProductValidator>();
        }
    }
}
