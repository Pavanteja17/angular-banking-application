import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  withDrawForm:any =  FormGroup
  selectFormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {

  }

}
