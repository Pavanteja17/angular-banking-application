import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransaction } from 'src/app/Data.Service/transaction';
import { Iuser } from 'src/app/Data.Service/user.service/user.data';
import { UserService } from 'src/app/Data.Service/user.service/user.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  public users:Iuser[]=[];

  mailid:any;
  withdrawAmount:number = 0;
  balanceVal:any = 0;
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(){
    
  this.listofUsers()
  }

  listofUsers(){
     this.users = this.userService.getAllUsers();
  
  }
  
  onAccountChange(email:any){
    const currUser = this.users.find(ele => ele.email == email)
    this.balanceVal = currUser?.balance
    this.mailid = currUser?.email
    console.log(this.mailid)
    console.log(this.balanceVal)

    

  }

  onSubmit(): void {

    var msg = this.userService.depositAmount(this.mailid, this.withdrawAmount);
    var transaction:ITransaction={
      date: new Date().getTime(),
      transactionMessage:"Deposit",
      amount:this.withdrawAmount
    }
    this.userService.addTransaction(this.mailid, transaction);
    this.users = this.userService.getAllUsers();
    this.balanceVal += this.withdrawAmount;
    window.alert(msg);
    console.log(msg);
    this.router.navigate(['/admin/home']);

  }
}
