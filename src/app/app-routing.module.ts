import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHomeComponent } from './views/banner-home/banner-home.component'
import { LoginComponent } from './views/login/login.component'

const routes: Routes = [
  { path: 'home', component: BannerHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
