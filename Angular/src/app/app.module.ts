import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttphandlerService } from './httphandler.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardComponent} from './auth-guard/auth-guard.component';
import { DataService } from './_services/data.service';
import { CareerTableComponent } from './career-table/career-table.component';
import { CookieService } from 'ngx-cookie-service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CareerTableComponent,
    LandingPageComponent, 
    NavbarComponent
  ],
  bootstrap: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ 
    HttphandlerService, 
    AuthGuardComponent,
    DataService,
    CookieService
  ],
})
export class AppModule {}