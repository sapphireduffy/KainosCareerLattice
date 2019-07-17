import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  
  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {}

  public switchDepartment(choosenDeptID: number) {
    this.dataService.deptID = choosenDeptID;
    this.router.navigate(['/career']);
  }
}
