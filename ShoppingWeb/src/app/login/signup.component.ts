import { Component } from "@angular/core";

@Component({
  //Specify tag name for component
  selector: "sign-up",

  //Output for the component
  templateUrl: "./signup.component.html"
})
export class SignUpComponent {
  constructor() {
    //console.log("Sign UP Constructor");
  }
  SignUpHeading: string = "Sign View";

  handleMySignUpEvent(myValue: any) {

    console.log("UserName:" + myValue.name + "     Password:" + myValue.pwd);
  }
}
