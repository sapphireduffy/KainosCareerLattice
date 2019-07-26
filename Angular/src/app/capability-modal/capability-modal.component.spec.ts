import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityModalComponent } from './capability-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockObjects } from '../services/mock-objects';

describe('CapabilityModalComponent', () => {
  let component: CapabilityModalComponent;
  let fixture: ComponentFixture<CapabilityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CapabilityModalComponent 
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityModalComponent);
    component = fixture.componentInstance;
    component.capability = MockObjects.role
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
