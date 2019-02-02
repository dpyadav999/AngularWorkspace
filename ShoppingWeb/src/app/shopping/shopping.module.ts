import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { CartComponent } from "./cart.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchData } from "./searchdata.pipe";
import { CategoriesComponent } from "./categories.component";
import { RouterModule } from "@angular/router";

let routes = [
  {
    path: "categories",
    component: CategoriesComponent
  }
];

@NgModule({
  //Register components
  declarations: [
    ProductComponent,
    CartComponent,
    SearchData,
    CategoriesComponent
  ],

  //Startup component
  bootstrap: [],

  //Specify Module Dependencies
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],

  exports: [ProductComponent, CartComponent]
})
export class ShoopingModule {}
