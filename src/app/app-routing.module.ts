import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHomeComponent } from './views/banner-home/banner-home.component'
import { LoginComponent } from './views/login/login.component'
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  { path: 'home', component: BannerHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restrito', component: RestritoComponent, canActivate: [GuardGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
