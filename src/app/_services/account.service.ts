import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private isLoggedIn :boolean=false
  private loggedInRole:string|null;
  constructor() { 
    this.loggedInRole = null;
  }

  login(userName: string, password: string) {
    console.log(userName+password);
    if(userName=='admin@wellsfargo.com' && password=='Qwerty12') {
      this.loggedInRole = 'admin';
      return 'admin';
    }
    this.loggedInRole = 'user';
    return 'user';
  }

  getUserValue() {
    return this.loggedInRole;
  }
}
