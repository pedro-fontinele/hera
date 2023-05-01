import { Component, OnInit } from '@angular/core';
import { Product } from './../../../domain/entity/product/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { PoPageAction, PoPageFilter, PoTableColumn, PoTableColumnLabel } from '@po-ui/ng-components';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit():void {
    this.getAllProducts();
  }

  public items: Array<Product> = [];

  public readonly actions: Array<PoPageAction> = [
    // actions of table here
  ];

  public readonly columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Id', type: 'string', width: '15%'},
    { property: 'name',  label: 'Nome', type: 'string', width: '30%' },
    { property: 'description', label: 'Descrição', type: 'string', width: '40%' },
    { property: 'isActive',  label: 'Status',  type: 'lable', width: '15%' ,
     labels: <Array<PoTableColumnLabel>>[
      {
        value: 0,
        color: 'color-11',
        label: 'Ativo',
        tooltip: 'Produto ativo'
      },
      {
        value: 1,
        color: 'color-07',
        label: 'Inativo',
        tooltip: 'Produto inativo'
      }
    ]
    }
  ];

  public readonly filterSettings: PoPageFilter = {
   
    placeholder: 'Search'
  };

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
        next: (response: Product[]) => {
          this.items = response;
        },
        error: () => {
          
        },
        complete: () => {
          
        }
     });
   }
}
