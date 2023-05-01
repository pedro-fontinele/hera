using Microsoft.Extensions.DependencyInjection;

namespace Hera.Services
{
    public static class ServiceConfiguration
    {
        public static void AddServiceConfiguration(this IServiceCollection service)
        {
            service.AddScoped<IProductService, ProductService>();
        }
    }
}
