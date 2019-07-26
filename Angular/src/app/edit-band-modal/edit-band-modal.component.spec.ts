import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandModalComponent } from './edit-band-modal.component';

describe('EditBandModalComponent', () => {
  let component: EditBandModalComponent;
  let fixture: ComponentFixture<EditBandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
