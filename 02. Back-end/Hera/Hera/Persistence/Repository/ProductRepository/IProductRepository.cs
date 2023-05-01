using System.Threading.Tasks;
using Hera.Domain.Entity.Model;
using System.Collections.Generic;

namespace Hera.Persistence.Repository
{
    public interface IProductRepository
    {
        // Consult
        Task<List<Product>> GetAllProducts();
        Task<Product> GetProductById(uint id);

        // Action
        void InsertProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(Product product);
    }
}
