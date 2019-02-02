import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  private isAdminLoggedIn = false;

  getIsAdminLoggedIn() {
    return this.isAdminLoggedIn;
  }
  setIsAdminLoggedIn(newVal: boolean) {
    this.isAdminLoggedIn = newVal;
  }

  isValidUser(userName: string, password: string): boolean {
    //let flag = false;
    if (userName == "admin" && password == "admin") {
      this.isAdminLoggedIn = true;
    } else {
      this.isAdminLoggedIn = false;
    }
    //this.isAdminLoggedIn = flag;
    return this.isAdminLoggedIn;
  }
}
