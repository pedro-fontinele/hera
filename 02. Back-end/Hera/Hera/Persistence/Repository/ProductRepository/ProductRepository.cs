using System.Linq;
using Hera.Data.Context;
using System.Threading.Tasks;
using Hera.Domain.Entity.Model;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Hera.Persistence.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _dataContext;

        public ProductRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Product>> GetAllProducts()
        {
            IQueryable<Product> query = _dataContext.Product;

            query = query.AsNoTracking()
                         .OrderByDescending(e => e.Id);

            return await query.ToListAsync();
        }

        public async Task<Product> GetProductById(uint id)
        {
            IQueryable<Product> query = _dataContext.Product;

            query = query.AsNoTracking()
                         .Where(e => e.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async void InsertProduct(Product product)
        {
            _dataContext.Product.Add(product);
            await _dataContext.SaveChangesAsync();
        }

        public async void UpdateProduct(Product product)
        {
            _dataContext.Product.Update(product);
            await _dataContext.SaveChangesAsync();
        }

        public async void DeleteProduct(Product product)
        {
            _dataContext.Product.Remove(product);
            await _dataContext.SaveChangesAsync();
        }
    }
}
