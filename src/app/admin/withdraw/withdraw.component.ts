import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'


interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withDrawForm:any =  FormGroup
  selectFormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {

  }

}
