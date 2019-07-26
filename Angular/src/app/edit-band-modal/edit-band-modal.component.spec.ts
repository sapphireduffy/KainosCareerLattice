import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandModalComponent } from './edit-band-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { MockObjects } from '../services/mock-objects';

describe('EditBandModalComponent', () => {
  let component: EditBandModalComponent;
  let fixture: ComponentFixture<EditBandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        EditBandModalComponent 
      ],
      providers: [
        NgbActiveModal,
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandModalComponent);
    component = fixture.componentInstance;
    component.bandToEdit = MockObjects.band;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
