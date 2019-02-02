import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../shared/login.service";

@Component({
  //Specify tag name for component
  selector: "sign-in",

  //Output for the component
  templateUrl: "./signin.component.html"
})
export class SignInComponent {
  username: string = "Guest";
  SignInHeading: string = "Login View";
  constructor(private ls: LoginService, private router: Router) {}

  handleMyEvent(myValue: any) {
    this.username = myValue.name;

    let isAdminLogin = this.ls.isValidUser(myValue.name, myValue.pwd);

    if (isAdminLogin == true) {
      this.router.navigate(["/categories"]);
    } else {
      this.router.navigate(["/error"]);
    }
  }
}
