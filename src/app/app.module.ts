
<<<<<<< HEAD
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DataService } from "./_services/data.service";
import { AppComponent } from "./app.component";
import { CareerTableComponent } from './career-table/career-table.component';

@NgModule({
  declarations: [AppComponent, CareerTableComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
=======
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
>>>>>>> landing page component
  bootstrap: [AppComponent]
})
export class AppModule {}
