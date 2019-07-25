import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleModalComponent } from './add-role-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../_services/data.service';

describe('AddRoleModalComponent', () => {
  let component: AddRoleModalComponent;
  let fixture: ComponentFixture<AddRoleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddRoleModalComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        NgbActiveModal,
        DataService
      ]
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
