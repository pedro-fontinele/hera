using Hera.Services;
using System.Threading.Tasks;
using Hera.Domain.Entity.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Hera.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var returned = await _productService.GetAllProducts();
            return Ok(returned);
        }

        [HttpGet("id/{idProduct}")]
        public async Task<IActionResult> Get([FromRoute] uint idProduct)
        {
            var returned = await _productService.GetProductById(idProduct);
            return Ok(returned);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductDto productDto)
        {
            var returned = await _productService.InsertProduct(productDto); 
            return Ok(returned);
        }

        [HttpPut("id/{idProduct}")]
        public async Task<IActionResult> Put([FromRoute] uint idProduct, [FromBody] ProductDto productDto)
        {
            var retured = await _productService.UpdateProduct(idProduct, productDto);
            return Ok(retured);
        }

        [HttpDelete("id/{idProduct}")]
        public void Delete([FromRoute] uint idProduct)
        {
            _productService.DeleteProduct(idProduct);
        }
    }
}
