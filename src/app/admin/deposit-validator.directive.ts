import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms'
import { Directive, Input, OnInit} from '@angular/core';
 
 
@Directive({
  selector: '[depositValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DepositValidatorDirective, multi: true }
  ]
})
export class DepositValidatorDirective implements Validator, OnInit {
  ngOnInit() {
    
  }
 
  validate(c: AbstractControl): {[key: string]: any} | null {
    const depositAmount = c.value;
    if(depositAmount<0){
      return { 'error': true }
    }
 
   return null;
  }
}