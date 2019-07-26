import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapabilityModalComponent } from './edit-capability-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { MockObjects } from '../services/mock-objects';

describe('EditCapabilityModalComponent', () => {
  let component: EditCapabilityModalComponent;
  let fixture: ComponentFixture<EditCapabilityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        EditCapabilityModalComponent 
      ],
      providers: [
        NgbActiveModal,
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCapabilityModalComponent);
    component = fixture.componentInstance;
    component.capabilityToEdit = MockObjects.editCapability;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
