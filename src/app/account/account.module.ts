import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent} from './login/login.component';
import {LayoutComponent}  from './layout/layout.component';




@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class AccountModule { }
