import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './_helper/auth-guard.guard';

const routes: Routes = [

  { path: 'users', loadChildren: ()=>UsersModule, canActivate: [AuthGuard], data:{expectedRole: 'user'} },
  { path: 'admin', loadChildren: ()=>AdminModule, canActivate: [AuthGuard], data:{expectedRole:'admin'} },
  { path: 'account', loadChildren:()=> AccountModule },

  // otherwise redirect to home
  { path: '', loadChildren:()=>AccountModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
