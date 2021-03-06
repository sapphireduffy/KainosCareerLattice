import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { decode, verify } from "jsonwebtoken";
import { AuthGuardComponent } from "../auth-guard/auth-guard.component";

@Injectable()
export class AdminAuthGuardComponent implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService, private authGuard: AuthGuardComponent) { }

  cookieName = "adminMode";

  isAdminMode(): boolean {
    return this.cookieService.get(this.cookieName) == "true";
  }

  setAdminMode(value) {
    this.cookieService.set(this.cookieName, value);
  }

  isAdmin(): boolean {
    if (this.authGuard.validToken()) {
      return decode(this.cookieService.get("token"))["Type"] == "Admin";
    }
    return false;
  }

  logoutUser() {
    this.cookieService.delete("token");
    this.cookieService.delete("adminMode");
    this.router.navigate(["login"]);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAdmin() && this.isAdminMode()) {
      console.log("ADMIN VALID");
      return true;
    } else if (this.authGuard.validToken()) {
      console.log("VALID USER BUT NOT IN ADMIN MODE");
      this.router.navigate(["home"]);
    } else {
      console.log("SESSION INVALID");
      this.router.navigate(["login"]);
    }
    return false;
  }
}
