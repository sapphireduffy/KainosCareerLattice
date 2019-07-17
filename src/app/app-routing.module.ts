import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CareerTableComponent } from './career-table/career-table.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path:'career', component: CareerTableComponent},
  {path: '**', component: LoginComponent}
];
export const routing = RouterModule.forRoot(appRoutes);

