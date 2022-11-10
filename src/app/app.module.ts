import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetService } from './Data.Service/budget.service/budget.service';
import { UserLoginService } from './Data.Service/login.service/user.login.service';
import { UserService } from './Data.Service/user.service/user.service';
import { AuthGuard } from './_helper/auth-guard.guard';
import { AccountService } from './_services/account.service';
// import { MoneyConverterPipe } from './_helper/money-converter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    // MoneyConverterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AccountService, UserService, UserLoginService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
