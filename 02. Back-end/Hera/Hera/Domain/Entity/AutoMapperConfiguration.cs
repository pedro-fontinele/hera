using AutoMapper;
using Hera.Domain.Entity.AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Hera.Domain.Entity
{
    public static class AutoMapperConfiguration
    {
        public static void AddAutoMapperConfiguration (this IServiceCollection services)
        {
            var config = new MapperConfiguration(add =>
            {
                add.AddProfile<ProductMapper>();
            });
            IMapper mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
