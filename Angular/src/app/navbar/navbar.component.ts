import { Component, OnInit } from "@angular/core";
import { AdminAuthGuardComponent } from "../admin-auth-guard/admin-auth-guard.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  //adminAuthComponent needed in HTML for getting and setting adminMode token
  constructor(
    private router: Router,
    private authGuard: AdminAuthGuardComponent
  ) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigate(["home"]);
  }

  getIdParam() {
    var urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
  }

  setAdminMode(adminMode) {
    this.authGuard.setAdminMode(adminMode);
    if (adminMode && (this.router.url.includes("career") || this.router.url.includes("editroles"))) {
      this.router.navigate(["editroles"], {
        queryParams: { id: this.getIdParam() }
      });
    } else if (!adminMode && (this.router.url.includes("career") || this.router.url.includes("editroles"))) {
      this.router.navigate(["career"], {
        queryParams: { id: this.getIdParam() }
      });
    } else {
      this.router.navigate(["home"]);
    }
  }

  logout() {
    this.authGuard.logoutUser();
  }
}
