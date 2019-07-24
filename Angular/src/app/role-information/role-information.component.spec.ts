import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInformationComponent } from './role-information.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('RoleInformationComponent', () => {
  let component: RoleInformationComponent;
  let fixture: ComponentFixture<RoleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NgbActiveModal ],
      declarations: [ RoleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
