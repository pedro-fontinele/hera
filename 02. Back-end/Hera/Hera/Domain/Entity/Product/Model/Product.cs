namespace Hera.Domain.Entity.Model
{
    public class Product
    {
        public uint Id { get; set; }
        public string  Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
