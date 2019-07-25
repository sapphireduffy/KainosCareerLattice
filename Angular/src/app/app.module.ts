import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttphandlerService } from "./services/httphandler.service";
import { AuthGuardComponent } from "./auth-guard/auth-guard.component";
import { DataService } from "./services/data.service";
import { CareerTableComponent } from "./career-table/career-table.component";
import { CookieService } from "ngx-cookie-service";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RoleInformationComponent } from "./role-information/role-information.component";
import { NavbarComponent } from './navbar/navbar.component';
import { BandInformationComponent } from './band-information/band-information.component';
import { AddRoleModalComponent } from "./add-role-modal/add-role-modal.component";
import { EditRoleModalComponent } from './edit-role-modal/edit-role-modal.component';
import { AdminAuthGuardComponent } from './admin-auth-guard/admin-auth-guard.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AppRoutingModule } from './app-routing.module';
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
    AddRoleModalComponent,
    EditRoleModalComponent,
    AddCapabilityComponent,
    AdminTableComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    HttphandlerService,
    AuthGuardComponent,
    AdminAuthGuardComponent,
    DataService,
    CookieService
  ],
  entryComponents: [
    RoleInformationComponent,
    BandInformationComponent,
    AddRoleModalComponent,
    EditRoleModalComponent,
    AddCapabilityComponent
  ]
})
export class AppModule {}
