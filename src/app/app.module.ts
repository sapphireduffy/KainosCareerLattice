import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
