namespace Hera.Domain.Entity.Validator.ErrorMessage
{
    public static class ProductErrorMessage
    {
        // Fields
        public static string NameMustBeInformed = "O nome do produto deve ser informado.";
        public static string DescriptionMustBeInformed = "A descrição do produto deve ser informada.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "Campo não pode ser nulo.";
    }
}
