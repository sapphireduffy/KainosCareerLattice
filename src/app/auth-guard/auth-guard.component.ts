import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardComponent implements CanActivate {

    private token: Object
  
    constructor(private router:Router){}

    setToken(token){
      this.token = token
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.token != null){
        if(this.token.hasOwnProperty('Username') && this.token.hasOwnProperty('Type')){
          return true
        }
      }
      return false
    }
}
