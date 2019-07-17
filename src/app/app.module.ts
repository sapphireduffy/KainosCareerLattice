
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DataService } from "./_services/data.service";
import { AppComponent } from "./app.component";
import { CareerTableComponent } from './career-table/career-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CareerTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    DataService, 
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}