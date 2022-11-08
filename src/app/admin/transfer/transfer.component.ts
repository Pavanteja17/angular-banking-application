import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  Fbal_btn = false;
  Tbal_btn = false;
  from_bal: number = 0;
  to_bal: number = 0;

  constructor(public userService: UserService, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.listUsers();

    this.transfer = this.fb.group({
      from: ['', Validators.required],
      amount: ['', Validators.required],
      to: ['', Validators.required],
    })
    this.transfer.valueChanges.subscribe(console.log)
  }
  get transferControl() {
    return this.transfer.controls;
  }

  retBalance(email: string, type: string) {
    console.log("email rec:", email);
    if (type == 'from') {
      this.Fbal_btn = true;
      this.from_bal = this.userService.checkBalance(email);
      console.log(this.from_bal);
    }
    else {
      this.Tbal_btn = true;
      this.to_bal = this.userService.checkBalance(email);
      console.log(this.to_bal);
    }
  }

  resetForm() {
    this.Fbal_btn = false;
    this.Tbal_btn = false;
    this.from_bal = 0;
    this.to_bal = 0;
  }

  onSubmit() { 
    var msg=this.userService.transferAmount(this.transfer.value.from,this.transfer.value.to,this.transfer.value.amount,);
    window.alert(msg);
    console.log(msg);
    this.router.navigate(['/admin/home']);
  }
}
