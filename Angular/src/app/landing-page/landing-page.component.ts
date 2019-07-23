import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService){}

  ngOnInit(): void {}

  public switchDepartment(choosenDeptID: number) {
    this.router.navigate(['career'], { queryParams: { id: choosenDeptID }})
  }
}
