import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleModalComponent } from './add-role-modal.component';

describe('AddRoleModalComponent', () => {
  let component: AddRoleModalComponent;
  let fixture: ComponentFixture<AddRoleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
