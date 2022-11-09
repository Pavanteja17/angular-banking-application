import { Injectable } from '@angular/core';
import { UserLoginService } from '../Data.Service/login.service/user.login.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private isLoggedIn :boolean=false
  private loggedInRole:string|null;
  constructor(private loginService: UserLoginService) { 
    this.loggedInRole = null;
  }

  login(userName: string, password: string) {
    console.log(userName+password);
    if(userName=='admin@wellsfargo.com' && password=='Qwerty12') {
      this.loggedInRole = 'admin';
      return 'admin';
    }
    else if(this.loginService.validateUser(userName, password)){
      this.loggedInRole = 'user';
      return 'user';
    }
    else{
      return null;
    }
  }

  getUserValue() {
    return this.loggedInRole;
  }
}
