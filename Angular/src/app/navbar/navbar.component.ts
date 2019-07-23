import { Component, OnInit } from '@angular/core';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';
import { DataService } from '../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private authComponent: AuthGuardComponent, private router: Router, private dataService: DataService) {
    //on first time load, read user type from token
    if(typeof this.dataService.isAdmin == "undefined")
    {
      if(this.authComponent.isAdmin())
        {
          this.dataService.isAdmin = true;
        }
      else
        {
          this.dataService.isAdmin = false;
        }
    }
  }

  ngOnInit() { }

  goToHome(){
    this.router.navigate(['home'])
  }

  switchRoleToAdmin(switchToAdmin: boolean){
    this.dataService.isAdmin = switchToAdmin
  }
}