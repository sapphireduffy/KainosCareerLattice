import { Component, OnInit } from '@angular/core';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private authComponent: AuthGuardComponent, private dataService: DataService) { 
    if(this.authComponent.isAdmin())
    {
      this.dataService.isAdmin = true;
    }
    else
    {
      this.dataService.isAdmin = false;
    }
  }

  ngOnInit() { }

  switchRoleToAdmin(switchToAdmin: boolean){
    this.dataService.isAdmin = switchToAdmin
  }
}