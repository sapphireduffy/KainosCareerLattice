import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { HttphandlerService } from '../httphandler.service'
import { JwtHelperService } from '@auth0/angular-jwt'
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './util.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  private helper = new JwtHelperService();

  ngOnInit() {}

  constructor(private httpHandler : HttphandlerService, private authGuard: AuthGuardComponent){
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit(){
    var username = this.form.value.username
    var password = this.form.value.password
    this.httpHandler.post("/api/login", {"Username" : username, "Password": password}).then(res => {
      var response = (Object) (res)
      if(response.hasOwnProperty('token')){
        var jwt = this.helper.decodeToken(response.token)
        console.log(jwt)
        this.authGuard.setToken(jwt)
      } else {
        console.log(response.error)
      }
    })
  }

}
