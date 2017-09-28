import { Component } from '@angular/core';
import {CartItem} from '../app/models/cart.model';
import {CartService} from "../app/services/cart.service";
@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent {

  constructor(public cs:CartService) {

   }

}
