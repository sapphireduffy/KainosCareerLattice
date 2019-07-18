import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInformationComponent } from './role-information.component';

describe('RoleInformationComponent', () => {
  let component: RoleInformationComponent;
  let fixture: ComponentFixture<RoleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
