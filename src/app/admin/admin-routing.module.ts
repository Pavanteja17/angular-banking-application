import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helper/auth-guard.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      { path: '', component:HomeComponent, pathMatch:'full' },
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard], data:{expectedRole:'admin'}, pathMatch:'full' },
      { path: 'create', component: CreateAccountComponent, pathMatch:'full' },
      { path: 'transfer', component: TransferComponent, pathMatch:'full' },
      { path: 'withdraw', component: WithdrawComponent, pathMatch:'full' },
      { path: 'deposit', component: DepositComponent, pathMatch:'full' },
      {path: 'logout', redirectTo:'/account/login', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
