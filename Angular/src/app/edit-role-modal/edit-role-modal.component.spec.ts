import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleModalComponent } from './edit-role-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { MockObjects } from '../_services/mock-objects';

describe('EditRoleModalComponent', () => {
  let component: EditRoleModalComponent;
  let fixture: ComponentFixture<EditRoleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditRoleModalComponent 
      ],
      providers: [
        NgbActiveModal,
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoleModalComponent);
    component = fixture.componentInstance;
    component.roleToEdit = MockObjects.role;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
