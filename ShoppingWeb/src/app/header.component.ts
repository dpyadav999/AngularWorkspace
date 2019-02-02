import { Component } from "@angular/core";
import { LoginService } from "./shared/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(private ls: LoginService) {
    console.log("Header Costructor");
  }
  isAdminLoggedIn() {
    return this.ls.getIsAdminLoggedIn();
  }
}
