import { Component, OnInit } from '@angular/core';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authComponent: AuthGuardComponent) { }

  ngOnInit() {
  }

}
