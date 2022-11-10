import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Data.Service/login.service/user.login.service';
import { ITransaction } from 'src/app/Data.Service/transaction';
import { Iuser } from 'src/app/Data.Service/user.service/user.data';
import { UserService } from 'src/app/Data.Service/user.service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Iuser = {
    name: "",
    email: "",
    type: "",
    phoneNo: 0,
    balance: 0,
    accno:Date.now(),
    transactions:[]
  }
  transaction: ITransaction[] = [];

  constructor(private loginService: UserLoginService, private userService: UserService) { 
    this.user = this.userService.getCurrentUserDetails(this.loginService.getCurrentUser());
    this.transaction=this.userService.getTransactions(this.user.email);
    this.transaction = this.user.transactions;
  }

  ngOnInit(): void {
    
  }

}
