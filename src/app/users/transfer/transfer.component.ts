import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/Data.Service/login.service/user.login.service';
import { Iuser } from 'src/app/Data.Service/user.service/user.data';
import { UserService } from 'src/app/Data.Service/user.service/user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  users: Iuser[] = this.userService.listUsers();
  transfer!: FormGroup;
  from_bal: number = 0;
  to_bal: number = 0;
  curr_user:string;
  constructor(public userService: UserService,
              private fb: FormBuilder, 
              private router: Router,
              private loginService:UserLoginService) { }

  ngOnInit(): void {
    this.curr_user = this.loginService.getCurrentUser();
    this.users = this.userService.listUsers();
    this.from_bal = this.userService.checkBalance(this.curr_user);

    this.transfer = this.fb.group({
      from: [{value: this.curr_user, disabled: true }, Validators.required],
      amount: ['', Validators.required],
      to: ['', Validators.required],
    });
    this.transfer.valueChanges.subscribe(console.log)
  }
  get transferControl() {
    return this.transfer.controls;
  }

  accountChange(acc: string, type: string) {
    if (type == 'from')
      this.from_bal = this.userService.checkBalance(acc)
    else
      this.to_bal = this.userService.checkBalance(acc)
  }

  onSubmit() {
    console.log(this.curr_user, this.transfer.value.to, this.transfer.value.amount);

    var msg = this.userService.transferAmount(this.curr_user, this.transfer.value.to, this.transfer.value.amount);
    window.alert(msg);
    console.log(msg);
    this.router.navigate(['/users/home']);
  }

}
