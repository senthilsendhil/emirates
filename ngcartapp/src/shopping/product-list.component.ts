import { Component } from '@angular/core';
import { Product } from '../app/models/product.model'
import {ProductService} from "../app/services/product.service";
import {CartService} from "../app/services/cart.service";
import {CartItem} from "../app/models/cart.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products:Product[] = [];
  constructor(public ps:ProductService,  public cs:CartService) {
  this.getProducts();


  }

  getProducts() {
    this.ps.getProducts().subscribe((data) => {
      console.log(data) ;
      this.products = data.json();

    }, () => {

    })
  }
  addToCart(product:Product) {

    this.cs.addCartItem( new CartItem(product.name,  product.price , 1))


  }
}
