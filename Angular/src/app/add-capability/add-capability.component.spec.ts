import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapabilityComponent } from './add-capability.component';

describe('AddCapabilityComponent', () => {
  let component: AddCapabilityComponent;
  let fixture: ComponentFixture<AddCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
