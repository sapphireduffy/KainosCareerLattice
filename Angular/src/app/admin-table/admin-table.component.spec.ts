import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableComponent } from './admin-table.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../_services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardComponent } from '../auth-guard/auth-guard.component';
import { AdminAuthGuardComponent } from '../admin-auth-guard/admin-auth-guard.component';
import { CookieService } from 'ngx-cookie-service';

describe('AdminTableComponent', () => {
  let component: AdminTableComponent;
  let fixture: ComponentFixture<AdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTableComponent,
                      NavbarComponent
                    ],
     imports: [ NgbAlertModule,
                RouterTestingModule
              ],
     providers: [ AuthGuardComponent,
                  AdminAuthGuardComponent,
                  DataService,
                  CookieService
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
