import { Component } from '@angular/core';
import { Product } from '../app/models/product.model'
import {ProductService} from "../app/services/product.service";
import {CartService} from "../app/services/cart.service";
import {CartItem} from "../app/models/cart.model";
import {getProdConfig} from "@angular/cli/models/webpack-configs";

@Component({
  selector: 'manage-product',
  templateUrl: './manager-product.component.html'
})
export class ManagerProductComponent {

  products: Product[] = [] ;
  formProduct : Product = new Product("","", 0, "");
  isUpdate = false;
  constructor(public ps:ProductService,  public cs:CartService) {
  this.getProducts();

  }

  getProducts() {
    this.ps.getProducts() .map( (res) => res.json() )
   /* this.ps.getProducts().subscribe((data) => {
      console.log(data) ;

      this.products = data.json();

    }, () => {

    })*/
  }
  populateProduct(product: Product) {
    this.isUpdate = true;
    this.formProduct = { ...product };
  }
  saveProduct(){
    this.isUpdate = false;
    this.ps.saveProdcut(this.formProduct).subscribe((data) => {
    this.getProducts();
      this.formProduct = new Product("","", 0, "");
    }, () => {

    })
  }
  deleteProduct(id:string) {
    this.ps.deleteProduct(id).subscribe(() => {
      this.getProducts();
    })
  }


}
