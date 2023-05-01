using Hera.Domain.Entity.Dto;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Hera.Services
{
    public interface IProductService
    {
        // Consult
        Task<List<ProductDto>> GetAllProducts();
        Task<ProductDto> GetProductById(uint id);

        // Action
        Task<ProductDto> InsertProduct(ProductDto productDto);
        Task<ProductDto> UpdateProduct(uint id, ProductDto productDto);
        void DeleteProduct(uint id);
    }
}
