import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js'
import { decode, verify } from 'jsonwebtoken'


@Injectable()
export class AuthGuardComponent implements CanActivate {

    private token: Object

    constructor(private router: Router, private cookieService: CookieService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      var token = this.cookieService.get('token')
      if(token != undefined && token != null && token != ''){
        if(verify(token, privateKey.privateKey)){
          this.token = decode(token)
          console.log("SESSION VALID")
          return true
        }
      }
      console.log("SESSION INVALID")
      return false
    }
}
