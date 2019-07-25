import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapabilityModalComponent } from './edit-capability-modal.component';

describe('EditCapabilityModalComponent', () => {
  let component: EditCapabilityModalComponent;
  let fixture: ComponentFixture<EditCapabilityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCapabilityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCapabilityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
