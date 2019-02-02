import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component";
import { ProductService } from "./product.service";
import { CartService } from "./cart.service";
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "./category.service";
import { LoginService } from "./login.service";

@NgModule({
  declarations: [MySignComponent],
  exports: [MySignComponent],
  providers: [ProductService, CartService, CategoryService, LoginService],
  imports: [HttpClientModule]
})
export class SharedModule {
  constructor() {
    console.log("Shared Module Constructor");
  }
}
