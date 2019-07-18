import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CareerTableComponent } from './career-table/career-table.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LandingPageComponent, canActivate:[AuthGuardComponent]},
  {path: 'career', component: CareerTableComponent, canActivate:[AuthGuardComponent]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
//export const routing = RouterModule.forRoot(appRoutes);