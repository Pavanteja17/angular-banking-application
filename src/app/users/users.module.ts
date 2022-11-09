import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { BudgetAppComponent } from './budget-app/budget-app.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserLoginService } from '../Data.Service/login.service/user.login.service';
import { UserService } from '../Data.Service/user.service/user.service';
import { MoneyConverterPipe } from '../_helper/money-converter.pipe';
import { AppModule } from '../app.module';
import { TimestampConverterPipe } from './timestamp-converter.pipe';


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    BudgetAppComponent,
    TransferComponent,
    TimestampConverterPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers:[],
  exports: [IndexComponent]
})
export class UsersModule { }
