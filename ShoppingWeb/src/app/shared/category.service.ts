import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../model/category.model";

@Injectable()
export class CategoryService {
  private restUrl = "http://localhost:3000/wsCategory";

  constructor(private http: HttpClient) {}

  getCategories() {
    //observable of category array

    return this.http.get<Category[]>(this.restUrl);
  }

  addCategories(newCtg: Category) {
    return this.http.post<Category>(this.restUrl, newCtg);
  }
  deleteCategory(id: number) {
    return this.http.delete(this.restUrl + "/" + id);
  }
  updateCategories(modifiedCtg: Category) {
    return this.http.put<Category>(
      this.restUrl + "/" + modifiedCtg.id,
      modifiedCtg
    );
  }
}
