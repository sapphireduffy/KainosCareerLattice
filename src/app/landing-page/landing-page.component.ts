import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  private departmentWatcher = new Subject<number>();
  public departmentId$ = this.departmentWatcher.asObservable();

  public switchDepartment(depId : number) {
    if (depId) {
      this.departmentWatcher.next(depId);
    }
  }

  constructor() { }

  subDepartment: Subscription;
  ngOnInit(): void {
    
  }
}
