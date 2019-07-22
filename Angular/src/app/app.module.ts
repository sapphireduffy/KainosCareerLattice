import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttphandlerService } from "./httphandler.service";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardComponent } from "./auth-guard/auth-guard.component";
import { DataService } from "./_services/data.service";
import { CareerTableComponent } from "./career-table/career-table.component";
import { CookieService } from "ngx-cookie-service";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RoleInformationComponent } from "./role-information/role-information.component";
import { NavbarComponent } from './navbar/navbar.component';
import { BandInformationComponent } from './band-information/band-information.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { AddRoleModalComponent } from "./add-role-modal/add-role-modal.component";
import { AlertComponentComponent } from './alert-component/alert-component.component';


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
<<<<<<< HEAD
    ConfirmationDialogComponent
  ],
  bootstrap: [ 
    AppComponent
=======
    BandInformationComponent,
    EditRolesComponent,
    AddRoleModalComponent,
    AlertComponentComponent
>>>>>>> b8fe7735e6b48a7088034e86fae1c126635c9d10
  ],
  bootstrap: [AppComponent],
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
<<<<<<< HEAD
    ConfirmationDialogComponent
=======
    BandInformationComponent,
    AddRoleModalComponent
>>>>>>> b8fe7735e6b48a7088034e86fae1c126635c9d10
  ]
})
export class AppModule {}
