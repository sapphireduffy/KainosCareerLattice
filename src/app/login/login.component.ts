import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { HttphandlerService } from '../httphandler.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './util.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  ngOnInit() {}

  constructor(private router: Router, private httpHandler : HttphandlerService){
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
      if(response.hasOwnProperty('error')){
        console.log("INVALID LOGIN")
      } else {
        console.log("TOKEN SET")
      }
      this.router.navigate(['home'])
    })
  }

}
