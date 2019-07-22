import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js'
import { decode, verify } from 'jsonwebtoken'

@Injectable()
export class AuthGuardComponent implements CanActivate {

    public token: Object

    constructor(private router: Router, private cookieService: CookieService){}

    validToken(){
      try {
        var token = this.cookieService.get('token')
        if(token){
          if(verify(token, privateKey.privateKey)){
            this.token = decode(token)
            console.log(this.token["Type"]);
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
