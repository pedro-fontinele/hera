using FluentValidation;
using Hera.Domain.Entity.Dto;
using Hera.Domain.Entity.Validator.ErrorMessage;

namespace Hera.Domain.Entity.Validator
{
    public class ProductValidator : AbstractValidator<ProductDto>
    {
        public ProductValidator()
        {
            RuleFor(e => e.Name).NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                .NotEmpty().WithMessage(ProductErrorMessage.NameMustBeInformed)
                                .MaximumLength(100).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Description).NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                       .NotEmpty().WithMessage(ProductErrorMessage.DescriptionMustBeInformed)
                                       .MaximumLength(350).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);
        }
    }
}
