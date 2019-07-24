import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthGuardComponent } from '../admin-auth-guard/admin-auth-guard.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private authGuard: AdminAuthGuardComponent) { }

  ngOnInit(): void {
    if (this.authGuard.isAdmin()) {
      this.authGuard.setAdminMode(true);
    }
  }

  public switchDepartment(choosenDeptID: number) {
    if (this.authGuard.isAdmin() && this.authGuard.isAdminMode()) {
      this.router.navigate(['editroles'], { queryParams: { id: choosenDeptID } })
    } else {
      this.router.navigate(['career'], { queryParams: { id: choosenDeptID } })
    }
  }
}
