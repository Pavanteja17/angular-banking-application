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


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    TransferComponent,
    WithdrawComponent,
    DepositComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    IndexComponent
  ]
})
export class AdminModule { }
