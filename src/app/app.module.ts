import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './Data.Service/user.service/user.service';
import { AuthGuard } from './_helper/auth-guard.guard';
import { AccountService } from './_services/account.service';
import { MoneyConverterPipe } from './_helper/money-converter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MoneyConverterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AccountService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
