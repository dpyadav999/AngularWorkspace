import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ErrorComponent } from "./error.component";
import { SignoutComponent } from "./signout.component";

let loginRoutes = [
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "signout",
    component: SignoutComponent
  },
  {
    path: "error",
    component: ErrorComponent
  }
];

@NgModule({
  //Register components
  declarations: [
    SignInComponent,
    SignUpComponent,
    ErrorComponent,
    SignoutComponent
  ],

  //Startup component
  bootstrap: [],

  //Specify Module Dependencies
  imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule {
  constructor() {
    console.log("Login Module Constructor");
  }
}
