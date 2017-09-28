import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../app/models/product.model";



@Component({

  template: `
    Prodcut Detail Page 
    <br>
    {{productDetail.name}}
    <br>
    {{productDetail.desc}}
    <br>
    {{productDetail.price}}
  `

})
export class ProductDetailComponent {
  productDetail ;
  constructor(public route:ActivatedRoute) {

    this.productDetail  = this.route.snapshot.data['product'];


  }



}
