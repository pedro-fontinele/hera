import { PoBreadcrumb } from "@po-ui/ng-components";

export abstract class Breadcrumbs{
   public static BreadcrumbRegistrerProduct: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/' },
            { label: 'Cadastro' }, 
            { label: 'Produto' }
        ]
    };

    public static BreadcrumbRegistrerProductNew: PoBreadcrumb = {
        items:  new Array().concat(Breadcrumbs.BreadcrumbRegistrerProduct.items, { label: 'Novo'}) 
    };

    public static BreadcrumbRegistrerProductEdit: PoBreadcrumb = {
        items:  new Array().concat(Breadcrumbs.BreadcrumbRegistrerProduct.items, { label: 'Editar'}) 
    };
}