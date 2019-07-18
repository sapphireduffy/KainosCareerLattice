import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { decode, verify } from 'jsonwebtoken';
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js';


@Injectable()
export class AuthGuardComponent implements CanActivate {

    private token: Object

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    var token = this.cookieService.get('token')
    if (token != undefined && token != null && token != '') {
      if (verify(token, privateKey.privateKey)) {
        console.log("SESSION VALID")
        return true
      }
    }
    console.log("SESSION INVALID")
    this.router.navigate(['login']);
    return false
  }
}
