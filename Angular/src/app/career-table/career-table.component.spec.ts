import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTableComponent } from './career-table.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataService } from '../services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAuthGuardComponent } from '../admin-auth-guard/admin-auth-guard.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';

describe('CareerTableComponent', () => {
  let component: CareerTableComponent;
  let fixture: ComponentFixture<CareerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      providers:[
        DataService,
        AdminAuthGuardComponent,
        CookieService,
        AuthGuardComponent
      ],
      declarations: [ 
        NavbarComponent,
        CareerTableComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
