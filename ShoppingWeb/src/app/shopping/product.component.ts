import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { Product } from "../model/product.model";
import { CartService } from "../shared/cart.service";
import { CartItem } from "../model/cartitems.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styles: []
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  mydate = new Date();
  queryString: string = "";

  constructor(private ps: ProductService, private cs: CartService) {}

  ngOnInit() {
    this.products = this.ps.getProduct();

    console.log(this.products);
  }
  addToCart(selectedProduct: Product) {
    var newItem = new CartItem(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.price,
      1
    );

    this.cs.addCartItems(newItem);
  }
}
