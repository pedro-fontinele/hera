using Hera.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Hera.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Product> Product { get; set; }
    }
}
