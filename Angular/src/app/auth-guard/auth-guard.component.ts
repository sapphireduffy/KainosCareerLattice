import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { decode, verify } from 'jsonwebtoken';
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js';
import { DataService } from '../_services/data.service.js';



@Injectable()
export class AuthGuardComponent implements CanActivate {

    private token: Object

    constructor(private router: Router, private cookieService: CookieService){}

    validToken(){
      try {
        var token = this.cookieService.get('token')
        if(token){
          if(verify(token, privateKey.privateKey)){
            this.token = decode(token)
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
      }else{
        console.log("SESSION INVALID")
    this.router.navigate(['login']);
    return false
      }
    }
    
  }

