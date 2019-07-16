import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { HttphandlerService } from '../httphandler.service'
import { JwtHelperService } from '@auth0/angular-jwt'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './util.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  submitted = false;
  private helper = new JwtHelperService();

  ngOnInit() {
  }

  constructor(private httpHandler : HttphandlerService){
    this.form = new FormGroup({
      username: new FormControl(Validators.required),
      password: new FormControl(Validators.required),
    })
  }

  get loginControls(){
    return this.form.controls;
  }

  onSubmit(){
    this.submitted =  true;

    if(!this.form.invalid){
      console.log("here");
        return;
    }
    var username = this.form.value.username
    var password = this.form.value.password
    this.httpHandler.post("/api/login", {"Username" : username, "Password": password}).then(res => {
      var response = (Object) (res)
      if(response.hasOwnProperty('token')){
        var jwt = this.helper.decodeToken(response.token)
        console.log(jwt)
      } else {
        console.log(response.error)
      }
    })
  }

}
