import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import privateKey from '../../../../privateKey.js';
import { HttphandlerService } from '../httphandler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './util.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  constructor(private router: Router, private httpHandler: HttphandlerService, private cookieService: CookieService) {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit() {
    try {
      var token = this.cookieService.get('token')
      if (token != undefined && token != null && token != '') {
        if (verify(token, privateKey.privateKey)) {
          this.router.navigate(['home'])
        }
      }
    } catch (err) { }
  }

  onSubmit() {
    var username = this.form.value.username
    var password = this.form.value.password
    this.httpHandler.post("/api/login", { "Username": username, "Password": password }).then(res => {
      var response = (Object)(res)
      if (response.hasOwnProperty('error')) {
        console.log("INVALID LOGIN")
      } else {
        console.log("TOKEN SET")
      }
      this.router.navigate(['home'])
    })
  }

}
