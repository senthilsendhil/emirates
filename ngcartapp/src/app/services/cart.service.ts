
import { CartItem } from "../models/cart.model";
import {Injectable} from "@angular/core";


@Injectable()
export class CartService {
  private cartItems: CartItem[]
  constructor() {
    this.cartItems = []
  }
  getCartItems() {
    return this.cartItems
  }
  addCartItem(item:CartItem) {
    this.cartItems.push(item)
  }
  deleteCartItem(index:number) {
    this.cartItems.splice(index,1)
  }
  getTotal() {
    return this.cartItems.reduce(function(a,b){

      return a + (b.price * b.quantity);
    },0)
  }
}
