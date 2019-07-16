import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DataService } from "./_services/data.service";
import { AppComponent } from "./app.component";
import { RoleInformationComponent } from "./role-information/role-information.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CareerTableComponent } from "./career-table/career-table.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { routing } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CareerTableComponent,
    RoleInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgbModule,
    NgbActiveModal
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [RoleInformationComponent]
})
export class AppModule {}
