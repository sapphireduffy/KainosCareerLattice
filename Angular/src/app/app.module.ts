import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttphandlerService } from './httphandler.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardComponent} from './auth-guard/auth-guard.component';
import { DataService } from './_services/data.service';
import { CareerTableComponent } from './career-table/career-table.component';
import { CookieService } from 'ngx-cookie-service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoleInformationComponent } from "./role-information/role-information.component";
import { NavbarComponent } from './navbar/navbar.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CareerTableComponent,
    LandingPageComponent, 
    NavbarComponent,
    RoleInformationComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [ 
    HttphandlerService, 
    AuthGuardComponent,
    DataService,
    CookieService
  ],
  entryComponents: [
    RoleInformationComponent,
    ConfirmationDialogComponent
  ]
})
export class AppModule {}
