import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router} from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  invalidCredentials = false;

  registerForm:any = FormGroup;
  submitted = false;


  constructor(
    private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder
    ) { }


    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
    }

  login(userName:string, password:string) : void {
    console.log(this.registerForm.controls['email'].value+"huhirguhui")
    let loggedInUser = this.accountService.login(userName, password);
    if(loggedInUser == 'admin') {
      this.router.navigate(['admin']);
      this.invalidCredentials=false;
    }else if(loggedInUser=='user'){
      this.router.navigate(['users']);
      this.invalidCredentials=false;
    }
    else{
      this.invalidCredentials = true;
    }
  }

  onSubmit() {
  
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      this.login(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value)
    }
   
  }

  get f() { return this.registerForm.controls; }
}
