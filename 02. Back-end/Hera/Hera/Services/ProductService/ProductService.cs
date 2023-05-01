using AutoMapper;
using System.Threading.Tasks;
using Hera.Domain.Entity.Dto;
using Hera.Domain.Entity.Model;
using System.Collections.Generic;
using Hera.Persistence.Repository;

namespace Hera.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _imapper;
        private readonly IProductRepository _productRepository;

        public ProductService(IMapper imapper, IProductRepository productRepository)
        {
            _imapper = imapper;
            _productRepository = productRepository;
        }

        public async Task<List<ProductDto>> GetAllProducts()
        {
            var returnedProduct = await _productRepository.GetAllProducts();
            return _imapper.Map <List<ProductDto>>(returnedProduct);
        }

        public async Task<ProductDto> GetProductById(uint id)
        {
            var returnedProduct = await _productRepository.GetProductById(id);
            return _imapper.Map<ProductDto>(returnedProduct);
        }

        public async Task<ProductDto> InsertProduct(ProductDto productDto)
        {
            if (productDto != null)
            {
                var product = _imapper.Map<Product>(productDto);
                _productRepository.InsertProduct(product);
                product = await _productRepository.GetProductById(product.Id);
                return _imapper.Map<ProductDto>(product);
            }
            return null;
        }

        public async Task<ProductDto> UpdateProduct(uint id, ProductDto productDto)
        {
            if (productDto != null)
            {
                var returnedProduct = await _productRepository.GetProductById(id);
                if (returnedProduct != null)
                {
                    var product = _imapper.Map<Product>(returnedProduct);
                    _productRepository.UpdateProduct(product);
                    product = await _productRepository.GetProductById(product.Id);
                    return _imapper.Map<ProductDto>(product);
                }
            }
            return null;
        }

        public async void DeleteProduct(uint id)
        {
            var returnedProduct = await _productRepository.GetProductById(id);
            if (returnedProduct != null)
            {
                _productRepository.DeleteProduct(returnedProduct);
            }
        }
    }
}
