import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './../../../domain/entity/product/Product';
import { Breadcrumbs } from 'src/app/helper/breadcrumb/breadcrumb';
import { ProductService } from 'src/app/services/product/product.service';
import { PoBreadcrumb, PoPageAction, PoPageListComponent, PoPageFilter, PoTableColumn, PoTableColumnLabel } from '@po-ui/ng-components';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('poPageList', { static: true }) poPageList?: PoPageListComponent;

  public breadcrumb: PoBreadcrumb;
  public items: Array<Product> = [];

  constructor(public productService: ProductService,
    private router: Router) {
      this.breadcrumb = Breadcrumbs.BreadcrumbRegistrerProduct;
    }
    
    public ngOnInit():void {
      this.getAllProducts();
    }
    
      public getAllProducts(): void {
        this.productService.getAllProducts().subscribe({
            next: (response: Product[]) => {
              this.items = response;
            },
            error: () => {},
            complete: () => {}
         });
      }
    
  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', action: this.goToProductNew.bind(this), disabled: this.disableNewButton.bind(this) },
    { label: 'Editar', action: this.goToProductEdit.bind(this), disabled: this.disableEditOrDeleteButton.bind(this) },
    { label: 'Deletar', disabled: this.disableEditOrDeleteButton.bind(this) }
  ]

  public readonly columns: Array<PoTableColumn> = [
    { property: 'id', label: 'ID', type: 'string', width: '15%'},
    { property: 'name',  label: 'Nome', type: 'string', width: '30%' },
    { property: 'description', label: 'Descrição', type: 'string', width: '40%' },
    { property: 'isActive',  label: 'Status',  type: 'label', width: '15%' ,  labels: <Array<PoTableColumnLabel>><any>[
      { value: true, color: 'color-12', label: 'Ativo' }, 
      { value: false, color: 'color-07', label: 'Inativo' }
     ]}
  ]

  public readonly filterSettings: PoPageFilter = {
    placeholder: 'Pesquisar'
  }

  public goToProductNew(): void {
    this.router.navigate(['/product/new']);
  }

  public goToProductEdit(): void {
    const productSelected = this.items.find(product => product['$selected']);
    if (productSelected) {
      let id = productSelected.id;
      this.router.navigate([`/product/edit/${id}`]);
    }
  }

  public disableNewButton(): boolean {
    return this.items.find(id => id['$selected']) ? true : false;
  }

  public disableEditOrDeleteButton(): boolean {
    let totalItems = this.items.length;
    let selectedItems = this.items.filter(product => product['$selected']).length;
    return selectedItems === totalItems || selectedItems > 1;
  }
  
  public loadMore(): void{

  }
}