import { Injectable } from '@angular/core';
import { IloginUsers } from '../login.service/login.users';
import { UserLoginService } from '../login.service/user.login.service';
import { ITransaction } from '../transaction';
import { Iuser } from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsersList(): any[] {
    throw new Error('Method not implemented.');
  }
  users: Iuser[] =[
    {
      name:'Altair Cook',
      email:'altair.cook@wf.com',
      type:'SAVINGS ACCOUNT',
      phoneNo:7397547991,
      balance:1000,
      accno:Date.now(),
      transactions:[],
    },
    {
      name:'John Doe',
      email:'john.doe@wf.com',
      type:'CURRENT ACCOUNT',
      phoneNo:7397547992,
      balance:10000,
      accno:Date.now(),
      transactions:[]
    }
  ]
  constructor(private loginService: UserLoginService) { }

  listUsers():Iuser[]{
    return this.users;
  }

  searchUser(email:string):number{
    console.log(this.users.length);
    for(var i=0;i<this.users.length;i++){
      console.log(this.users[i].email);
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
      return "Account created successfully"
    }
    else{
      console.log("user already registerd with same email");
      return "user already registerd with same email"
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
    var ind=this.searchUser(email);
    this.users[ind].balance+=Number(amt);
    return("Amount deposited");
  }

  transferAmount(fromEmail:string,destEmail:string,amt:number):string{
    var message = this.withdrawAmount(fromEmail,amt);
    if (message=="Amount Withdrawed"){

      // adding transaction
      var transactionW:ITransaction={
        date: new Date().getTime(),
        transactionMessage:"Fund Transfer to "+destEmail,
        amount:-1*amt
      }
      this.addTransaction(fromEmail,transactionW);
      
      // adding transaction
      var tempmsg= this.depositAmount(destEmail,amt);
      
      var transactionD:ITransaction={
        date: new Date().getTime(),
        transactionMessage:"Fund Transfer from "+fromEmail,
        amount:amt
      }
      this.addTransaction(destEmail,transactionD);
      
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

  getCurrentUserDetails(uname: string){
    var ind = this.searchUser(uname);
    console.log(ind);
    return this.users[ind];
  }
  addTransaction(email:string, transaction: ITransaction){
    var ind=this.searchUser(email);
    this.users[ind].transactions.push(transaction);
  }

  getTransactions(email:string){
    var ind=this.searchUser(email);
    return this.users[ind].transactions;
  }
}
