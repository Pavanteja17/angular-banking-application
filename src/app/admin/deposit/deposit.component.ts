import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private userService : UserService) { }

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

    this.userService.depositAmount(this.mailid, this.withdrawAmount);
    this.users = this.userService.getAllUsers();
    this.balanceVal += this.withdrawAmount;

  }
}
