import { Injectable } from "@angular/core";
import { CartItem } from "../model/cartitems.model";

@Injectable()
export class CartService {
  cartData: CartItem[] = [];

  getcartItems() {
    return this.cartData;
  }
  addCartItems(newitem: CartItem) {
    this.cartData.push(newitem);
  }
  deleteCartItem(idx: number) {
    this.cartData.splice(idx, 1);
  }
}
