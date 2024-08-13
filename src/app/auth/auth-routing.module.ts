import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [

  { 
    path: 'login', component:LoginComponent 
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'forgot',component:ForgotPasswordComponent
  },
  
  // {path:'/dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
