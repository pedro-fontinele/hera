import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './compoments/register/product/product.component';
import { ProductEditComponent } from './compoments/register/product/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/new', component: ProductEditComponent },
  { path: 'product/edit/:id', component: ProductEditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
