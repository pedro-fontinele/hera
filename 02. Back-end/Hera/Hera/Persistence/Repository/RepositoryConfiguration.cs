using Microsoft.Extensions.DependencyInjection;

namespace Hera.Persistence.Repository
{
    public static class RepositoryConfiguration
    {
        public static void AddRepositoryConfiguration(this IServiceCollection servicea)
        {
            servicea.AddTransient<IProductRepository, ProductRepository>();
        }
    }
}
