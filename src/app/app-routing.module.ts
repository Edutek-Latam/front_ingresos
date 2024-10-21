import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TotpComponent } from './auth/totp/totp.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'otp', canActivate:[authGuard] ,component: TotpComponent},
  {path:'', loadChildren:()=>import('./homelayout/homelayout.module').then(m=>m.HomelayoutModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
