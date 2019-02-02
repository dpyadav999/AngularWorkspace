import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header.component";

import { RouterModule } from "@angular/router";
import {
  HomeComponent,
  NotFoundComponent,
  ListComponent
} from "./menulink.component";

import { FormsModule } from "@angular/forms";
import { SignInComponent } from "./login/signin.component";
import { LoginModule } from "./login/login.module";
import { ShoopingModule } from "./shopping/shopping.module";

let appRoutes = [
  { path: "", component: HomeComponent }, //not use /
  {
    path: "list",
    component: ListComponent,
  },
  { path: "**", component: NotFoundComponent } // '**'  represents unmatched path
];

@NgModule({
  //Register components
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    NotFoundComponent
  ],

  //Startup component
  bootstrap: [AppComponent],

  //Specify Module Dependencies
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    ShoopingModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {
  constructor() {
    console.log("App Module constructo.");
  }
}
