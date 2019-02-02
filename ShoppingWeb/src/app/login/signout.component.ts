import { Component, OnInit } from "@angular/core";
import { LoginService } from "../shared/login.service";

@Component({
  selector: "app-signout",
  templateUrl: "./signout.component.html",
  styles: []
})
export class SignoutComponent implements OnInit {
  constructor(private ls: LoginService) {}

  ngOnInit() {
    return this.ls.setIsAdminLoggedIn(false);
  }
}
