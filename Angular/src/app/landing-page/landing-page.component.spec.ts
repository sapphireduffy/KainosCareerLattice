import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAuthGuardComponent } from '../admin-auth-guard/admin-auth-guard.component';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';
import { CookieService } from 'ngx-cookie-service';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LandingPageComponent,
        NavbarComponent
      ],
      imports: [ 
        RouterTestingModule 
      ],
      providers: [ 
        AdminAuthGuardComponent,
        AuthGuardComponent,
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
