
import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
  private products: Product[]
  restURL = 'http://localhost:2403/products';
  constructor(public http:Http) {

    this.products = [] ;
  }

  getProducts() {
    return this.http.get(this.restURL);
  }
  saveProdcut(product:Product) {
    return this.http.post(this.restURL,product)
  }
  deleteProduct(id:string) {
    return this.http.delete(this.restURL+ "/" + id)
  }
  getProduct(id:string) {
    return this.http.get(this.restURL+ "/" + id)
  }
}
