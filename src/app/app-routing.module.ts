import { Routes, RouterModule } from '@angular/router';
import { CareerTableComponent } from './career-table/career-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {path:'home', component: LandingPageComponent},
  {path:'career', component: CareerTableComponent},
  { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);