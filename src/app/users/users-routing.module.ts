import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAppComponent } from './budget-app/budget-app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
  path: '', component: IndexComponent,
    children: [
      { path: '', component:HomeComponent, pathMatch:'full' },
      { path: 'home', component: HomeComponent,pathMatch:'full' },
      { path: 'budget-app', component: BudgetAppComponent, pathMatch:'full' },
      { path: 'transfer', component: TransferComponent, pathMatch:'full' },
      {path: 'logout', redirectTo:'/account/login', pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
