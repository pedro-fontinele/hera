using AutoMapper;
using Hera.Domain.Entity.Dto;
using Hera.Domain.Entity.Model;

namespace Hera.Domain.Entity.AutoMapper
{
    public class ProductMapper : Profile
    {
        public ProductMapper()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
        }
    }
}
