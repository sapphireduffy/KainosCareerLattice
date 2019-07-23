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
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { AddCapabilityComponent } from './add-capability/add-capability.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CareerTableComponent,
    LandingPageComponent,
    NavbarComponent,
    RoleInformationComponent,
    BandInformationComponent,
    EditRolesComponent,
    AddRoleModalComponent,
    AddCapabilityComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule
  ],
  providers: [
    HttphandlerService,
    AuthGuardComponent,
    DataService,
    CookieService
  ],
  entryComponents: [
    RoleInformationComponent,
    BandInformationComponent,
    AddRoleModalComponent,
    AddCapabilityComponent
  ]
})
export class AppModule {}
