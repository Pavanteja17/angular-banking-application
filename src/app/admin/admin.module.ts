import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserService } from '../Data.Service/user.service/user.service';
import { WithdrawLimitValidatorDirective } from '../validators/withdraw-limit-validator.directive';
import { DepositValidatorDirective } from './deposit-validator.directive';
import { MoneyConverterPipe } from '../_helper/money-converter.pipe';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    TransferComponent,
    WithdrawComponent,
    DepositComponent,
    CreateAccountComponent,
    WithdrawLimitValidatorDirective,
    DepositValidatorDirective,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    
  ],
  exports: [
    IndexComponent
  ]
})
export class AdminModule { }
