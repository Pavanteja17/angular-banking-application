import { Component, OnInit } from '@angular/core';
import { Iexpense } from 'src/app/Data.Service/budget.service/expense.data';
import { BudgetService } from 'src/app/Data.Service/budget.service/budget.service';
import { UserLoginService } from 'src/app/Data.Service/login.service/user.login.service';



@Component({
  selector: 'app-budget-app',
  templateUrl: './budget-app.component.html',
  styleUrls: ['./budget-app.component.css']
})
export class BudgetAppComponent implements OnInit {
  name = 'Angular';
  enableEdit = false;
  hidden = true;
  enableEditIndex: any = null;
  backendData:Iexpense[]= [];
  remBudget=0;
  currentExpense=0;
  currentUser?:string;

  enableEditMethod(e:Event, i:number) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

  constructor(private loginService: UserLoginService, private budgetService: BudgetService) {
    this.currentUser = this.loginService.getCurrentUser();
    this.remBudget = this.budgetService.remainingBudget(this.currentUser);
    this.backendData = this.budgetService.getExpense(this.currentUser);
   }

  ngOnInit(): void {
  }
  saveSegment(row: any){
    console.log(row.id);
    console.log(row.amount)
    this.budgetService.modifyExpense(this.currentUser, row.id, row.amount);
    this.remBudget = this.budgetService.remainingBudget(this.currentUser);
    this.enableEdit=false

  }
  onAddExpense(){
    this.hidden=false;
  }
  saveExpense(){
    var expense:Iexpense={
      id:Date.now(),
      amount:this.currentExpense
    }
    this.budgetService.addWithdraw(this.currentUser, expense);
    this.hidden=true;
    this.remBudget=this.budgetService.remainingBudget(this.currentUser);
  }

}
