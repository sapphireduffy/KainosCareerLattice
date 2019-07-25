import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBandComponent } from './add-band.component';

describe('AddBandComponent', () => {
  let component: AddBandComponent;
  let fixture: ComponentFixture<AddBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
