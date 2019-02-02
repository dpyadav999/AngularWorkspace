import { Product } from "../model/product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  private productData: Product[] = [];

  constructor() {
    this.productData.push(
      new Product(1, "Sony Tv", 100, "Sony Vendor", 1),
      new Product(2, "Sony Mobile", 100, "Sony Mobile Vendor", 1),
      new Product(3, "Nokia", 100, "Nokia vender", 1),
      new Product(4, "Samsang", 100, "Samsang vender", 1)
    );
  }
  getProduct(): Product[] {
    return this.productData;
  }
}
