import { Component, OnInit } from "@angular/core";
import { CartService } from "../shared/cart.service";
import { CssSelector } from "@angular/compiler";
import { CartItem } from "../model/cartitems.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: []
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cs: CartService) {}

  ngOnInit() {
    this.cartItems = this.cs.getcartItems();
  }
  delete(idx: number) {
    this.cs.deleteCartItem(idx);
  }

  totalAmount() {
    let tot = 0;

    for (let e of this.cartItems) {
      tot += e.price * e.qty;
    }
    return tot;
  }
}
