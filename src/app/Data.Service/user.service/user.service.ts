import { Injectable } from '@angular/core';
import { IloginUsers } from '../login.service/login.users';
import { UserLoginService } from '../login.service/user.login.service';
import { Iuser } from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Iuser[] =[
    {
      name: "TempUser1",
      email: "tempuser@wf.com",
      type: "savings",
      phoneNo: 9999999999,
      balance: 10000
    },
    {
      name: "TempUser2",
      email: "tempuser2@wf.com",
      type: "savings",
      phoneNo: 8888888888,
      balance: 100000
    }

  ]
  constructor(private loginService: UserLoginService) { }

  listUsers():Iuser[]{
    return this.users;
  }

  searchUser(email:string):number{
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].email==email){
        console.log("found");
        return i;
      }
    }
    return -1;
  }
  
  createUser(user:Iuser){
    if (this.searchUser(user.email)==-1){
      this.users.push(user);
      console.log("added");
    }
    else{
      console.log("user already registerd with same email");
    }
  }

  deleteUser(email:string){
    if(this.searchUser(email)==-1){
      console.log("user not found with this email");
    }
    else{
      this.users.splice(this.searchUser(email),1);
      console.log("user deleted");
    }
  }

  checkZeroBalance(email:string){
    var ind=this.searchUser(email);
    if (this.users[ind].balance<=0){
      return true;
    }
    else{
      return false;
    }
  }

  withdrawAmount(email:string,amt:number){
    var ind=this.searchUser(email);
    if(this.checkZeroBalance(email)==true){
      return "Balance less than zero!!"
    }
    else if(this.users[ind].balance-amt<0){
      return "Insufficent funds!!"
    }
    else {
    this.users[ind].balance-=amt;
    console.log("Amount Withdrawed");
    return "Amount Withdrawed";
    }
  }

  depositAmount(email:string,amt:number):string{
    console.log("+++"+amt);
    var ind=this.searchUser(email);
    this.users[ind].balance+=Number(amt);
    return("Amount deposited");
  }

  transferAmount(fromEmail:string,destEmail:string,amt:number):string{
    var message = this.withdrawAmount(fromEmail,amt);
    if (message=="Amount Withdrawed"){
      var tempmsg= this.depositAmount(destEmail,amt);
      return "Amount Transfered";
    }
    else{
      return message;
    }
  }

  checkBalance(email:string):number{
    var ind=this.searchUser(email);
    return this.users[ind].balance;
  }

  getAllUsers() {
    return this.users;
  }
}
