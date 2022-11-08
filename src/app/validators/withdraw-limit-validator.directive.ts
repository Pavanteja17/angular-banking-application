import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms'
import { Directive, Input, OnInit} from '@angular/core';
 
 
@Directive({
  selector: '[withdrawLimitValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: WithdrawLimitValidatorDirective, multi: true }
  ]
})
export class WithdrawLimitValidatorDirective implements Validator, OnInit {

  @Input("currBal") currBal? : Number
 
  ngOnInit() {
    
  }
 
  validate(c: AbstractControl): {[key: string]: any} | null {
    const withdrawAmount = c.value;
    if(this.currBal!=undefined && (this.currBal < withdrawAmount || withdrawAmount<0)){
      console.log(withdrawAmount+" "+this.currBal);
      return { 'error': true }
    }
 
   return null;
  }
}