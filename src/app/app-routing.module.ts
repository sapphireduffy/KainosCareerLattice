import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path:'login', component: LoginComponent},
  //{path:'home-page', component: homePageComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);

