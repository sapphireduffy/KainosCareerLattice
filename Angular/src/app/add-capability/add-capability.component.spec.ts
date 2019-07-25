import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapabilityComponent } from './add-capability.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../_services/data.service';

describe('AddCapabilityComponent', () => {
  let component: AddCapabilityComponent;
  let fixture: ComponentFixture<AddCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddCapabilityComponent 
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
    fixture = TestBed.createComponent(AddCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});