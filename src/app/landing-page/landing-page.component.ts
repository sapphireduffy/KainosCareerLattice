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


  setDepartmentID(){
    this.switchDepartment(3);

    this.subDepartment = this.departmentId$.subscribe((id =>{
      var test = id;
      console.log(test);
    }));
  }
}
