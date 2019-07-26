import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityModalComponent } from './capability-modal.component';

describe('CapabilityModalComponent', () => {
  let component: CapabilityModalComponent;
  let fixture: ComponentFixture<CapabilityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
