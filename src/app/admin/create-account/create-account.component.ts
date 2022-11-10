import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Data.Service/user.service/user.service';
import { Iuser } from 'src/app/Data.Service/user.service/user.data';
import { IloginUsers } from 'src/app/Data.Service/login.service/login.users';
import { UserLoginService } from 'src/app/Data.Service/login.service/user.login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from 'src/app/Data.Service/budget.service/budget.service';
import { Ibudget } from 'src/app/Data.Service/budget.service/budget.data';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  _accountno: number = Date.now();
  _loginObj: IloginUsers;
  createForm: FormGroup;

  constructor(private userService: UserService,
    private loginService: UserLoginService,
    private router: Router,
    private budgetService: BudgetService,
    private fb: FormBuilder) 
    {
    this.createForm = this.fb.group({
      name: ['',[Validators.required]],
      accno: [{value: this._accountno , disabled: true},[Validators.required]],
      balance: [0,[Validators.required]],
      phoneNo: [,[Validators.required]],
      type: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.minLength(6)]]
    });
    this.createForm.valueChanges.subscribe(console.log);
  } 

  get name() { return this.createForm.get('name'); }
  get accno() { return this.createForm.get('accno'); }
  get in_bal() { return this.createForm.get('balance'); }
  get phoneNo() { return this.createForm.get('phoneNo'); }
  get ac_type() { return this.createForm.get('type'); }
  get email() { return this.createForm.get('email'); }
  get pass() { return this.createForm.get('pass'); }


  ngOnInit(): void {
  }

  submitForm() {
    if (this.createForm.invalid)
      console.log("error!!");
    var temp:Iuser ={
      name:this.createForm.value.name,
      email:this.createForm.value.email,
      phoneNo: this.createForm.value.phoneNo,
      balance:this.createForm.value.balance,
      type: this.createForm.value.type,
      accno:Date.now(),
      transactions:[]
    }

    this._loginObj = {
      userName: this.createForm.value.email,
      password: this.createForm.value.pass
    }

    var budget:Ibudget = {
      email:this.createForm.value.email,
      tot_budget:5000,
      expense:[]
    }

    var msg = this.userService.createUser(temp);
    this.budgetService.addBudget(budget);
    window.alert(msg);
    console.log(msg);
    this.loginService.addUser(this._loginObj);
    this.router.navigate(['/admin/home']);
  }

}
