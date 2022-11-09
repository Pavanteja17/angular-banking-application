import { Injectable } from '@angular/core';
import { WithdrawComponent } from 'src/app/admin/withdraw/withdraw.component';
import { Ibudget } from './budget.data';
import { Iexpense } from './expense.data';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:Ibudget[]=[
    {
      email:'temp1@wf.com',
      tot_budget: 5000,
      expense: []
    },
    {
      email:'temp2@wf.com',
      tot_budget: 1000,
      expense: []
    }
  ]
  constructor() { }

  searchUser(email:string):number{
    for(var i=0;i<this.budget.length;i++){
      if(this.budget[i].email==email){
        console.log("found");
        return i;
      }
    }
    return -1;
  }

  setLimit(email:string,amt:number){
    var ind = this.searchUser(email);
    this.budget[ind].tot_budget = amt;
    console.log("Limit Updated!!");    
  }
  addWithdraw(email:string,expense:Iexpense){
    var ind = this.searchUser(email);
    this.budget[ind].expense.push(expense)
    console.log("Added!!");
    
  }
  getExpense(email:string){
    var ind=this.searchUser(email);
    return this.budget[ind].expense;
  }

  modifyExpense(email:string,id:number,amt:number){
    var ind=this.searchUser(email);
    for(var i=0; i<this.budget[ind].expense.length; i++){
      if(this.budget[ind].expense[i].id==id)
        this.budget[ind].expense[i].amount = amt;
    console.log("Updated!!");
    
    }
  }
}
