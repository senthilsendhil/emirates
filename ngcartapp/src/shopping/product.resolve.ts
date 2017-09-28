import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Product} from "../app/models/product.model";
import {ProductService} from "../app/services/product.service";


@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(public productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.productService.getProduct(route.paramMap.get('id')) .map( (res) => res.json() )

  }
}
