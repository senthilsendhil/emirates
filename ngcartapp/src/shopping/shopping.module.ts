import { NgModule } from '@angular/core';

import { ProductListComponent} from './product-list.component';
import {CartItemsComponent} from './cart-items.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ManagerProductComponent} from "./manager-product.component";
import {ProductDetailComponent} from "./productDetail.component";
import {RouterModule} from "@angular/router";
import {ProductResolve} from "./product.resolve";



@NgModule({
  declarations: [ProductListComponent, CartItemsComponent, ManagerProductComponent , ProductDetailComponent],
  imports : [CommonModule, FormsModule,
    RouterModule.forChild([{path:'detail/:id', component: ProductDetailComponent,resolve: {
      product: ProductResolve
    }}])],
  providers: [ProductResolve],
  exports : [ProductListComponent, CartItemsComponent, ManagerProductComponent]

})
export class ShoppingModule { }
