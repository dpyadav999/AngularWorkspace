import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../shared/category.service";
import { Category } from "../model/category.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styles: []
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  frmCtg = new Category(null, null);

  constructor(private cs: CategoryService) {}

  ngOnInit() {
    this.getCat();
  }
  getCat() {
    this.cs.getCategories().subscribe(
      data => {
        this.categories = data;
        console.log("Get category" + data);
      },
      err => {
        console.log("Get category" + err);
      }
    );
  }

  add() {
    this.cs.addCategories(this.frmCtg).subscribe(
      data => {
        console.log("Add Success");

        this.getCat();

        //this.categories.push(data);
      },
      err => {
        console.log("Add Error", err);
      }
    );
  }
  delete(id: number) {
    this.cs.deleteCategory(id).subscribe(
      data => {
        console.log("Delete Success");
        let ids = this.categories.findIndex(e => e.id == id);
        //this.categories.splice(ids, 1);
        this.getCat();
      },
      err => {
        console.log("Delete Error", err);
      }
    );
  }

  edit(selectedCtg: Category) {
    //this.frmCtg = selectedCtg;

    Object.assign(this.frmCtg, selectedCtg);
  }

  update() {
    this.cs.updateCategories(this.frmCtg).subscribe(
      data => {
        console.log("Update Success");
        // let idx = this.categories.findIndex(e => e.id == data.id);
        // this.categories[idx] = data;
        //this.categoirs.push(data);

        this.getCat();
      },
      err => {
        console.log("Update Error", err);
      }
    );
  }
}
