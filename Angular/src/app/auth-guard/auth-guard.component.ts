import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js'
import { decode, verify } from 'jsonwebtoken'

@Injectable()
export class AuthGuardComponent implements CanActivate {
    constructor(private router: Router, private cookieService: CookieService){}

    validToken() : boolean {
      try {
        var token = this.cookieService.get('token')
        if(token){
          if(verify(token, privateKey.privateKey)){
            var token = decode(token)
            return true
          }
        }
      } catch (err){}
      return false
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.validToken()){
        console.log("SESSION VALID")
        return true
      }
      console.log("SESSION INVALID")
      this.router.navigate(['login']);
      return false
    }
}