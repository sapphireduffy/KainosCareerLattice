import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DataService } from "./_services/data.service";
import { AppComponent } from "./app.component";
import { CareerTableComponent } from "./career-table/career-table.component";
import { RoleInformationComponent } from "./role-information/role-information.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent, CareerTableComponent, RoleInformationComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [DataService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [RoleInformationComponent]
})
export class AppModule {}
