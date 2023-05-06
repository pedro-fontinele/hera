import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/domain/entity/product/Product';
import { Breadcrumbs } from 'src/app/helper/breadcrumb/breadcrumb';
import { ProductService } from 'src/app/services/product/product.service';
import { SelectOptions } from 'src/app/helper/helpers/select-options/select-options';
import { BreadcrumbNewOrEdit } from 'src/app/helper/validator/breadcrumb-new-or-edit';
import { PoBreadcrumb, PoNotificationService, PoPageAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('formProduct', { static: true }) formProduct!: NgForm;

  public breadcrumb: PoBreadcrumb;
  public product = new Product();
  public optionsSku: SelectOptions[];
  public statusOptions: SelectOptions[];

  public ngOnInit(): void {
    this.getProductsById();
  }
  
  constructor (private route: Router,
               private poNotification: PoNotificationService,
               private activatedRoute: ActivatedRoute,
               public productService: ProductService) {
    this.optionsSku = SelectOptions.optionsSku;    
    this.statusOptions = SelectOptions.statusOptions;       
    this.breadcrumb = BreadcrumbNewOrEdit.breadcrumbNewOrEdit(this.route.url) ? Breadcrumbs.BreadcrumbRegistrerProductNew : Breadcrumbs.BreadcrumbRegistrerProductEdit;
  }
  
  public getProductsById(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.productService.getProductsById(+id).subscribe({
        next: (response: Product) => {
          this.product = response;
        },
        error: () => {},
        complete: () => {}
     })
    }
  }
      
  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.save.bind(this) },
    { label: 'Cancelar', action: this.cancel.bind(this) }
  ]

  public save(): void {
    if (this.formProduct?.valid) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.product = { ...this.formProduct?.value };
      id ? this.putProduct(+id, this.product) : this.postProduct(this.product);
    }
  }
  
  public cancel(): void {
    this.formProduct?.reset();
    this.route.navigate(['/product']);
    this.poNotification.information('Ação desfeita com sucesso!');
  }

  public putProduct(id: number, product: Product): void{
     this.productService.putProducts(id, product).subscribe({
       next: () => { },
       error: (error: any) => {
         this.poNotification.error('Ocorreu um erro na atualização deste produto!');
         console.error(error);
         console.error(product);
       },
       complete: () => {
         this.poNotification.success('Produto atualizado com sucesso!');
         this.route.navigate(['/product']);
       }
      })
  }

  public postProduct(product: Product){
    this.productService.postProducts(product).subscribe(
      (product: Product) => {
        this.route.navigate([`/product/edit/${product.id}`]);
      },
      (erro: any) => {
        this.poNotification.error('Ocorreu um erro na atualização deste produto!');
        console.error(erro);
        console.error(product);
      }
     );
  }
    
}