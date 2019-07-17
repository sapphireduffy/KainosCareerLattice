import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { HttphandlerService } from '../httphandler.service'
import { decode, verify } from 'jsonwebtoken'
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';
import privateKey from '../../../Express-API/privateKey.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './util.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

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
      //console.log(response)
      if(response.hasOwnProperty('error')){
        console.log("INVALID LOGIN")
      } else {
        var verification = verify(response.token, privateKey.privateKey)
        if(response.hasOwnProperty('token') && verification){
          var jwt = decode(response.token)
          //console.log(jwt)
          this.authGuard.setToken(jwt)
          console.log("TOKEN SET")
        } else {
          console.log(response.error)
        }
      }
    })
  }

}
