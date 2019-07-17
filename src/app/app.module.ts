import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttphandlerService } from './httphandler.service';
import { routing } from './app-routing.module';
import { AuthGuardComponent} from './auth-guard/auth-guard.component';
import { DataService } from './_services/data.service';
import { CareerTableComponent } from './career-table/career-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CareerTableComponent
  ],
  bootstrap: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ 
    HttphandlerService, 
    AuthGuardComponent,
    DataService
  ],
})
export class AppModule {}