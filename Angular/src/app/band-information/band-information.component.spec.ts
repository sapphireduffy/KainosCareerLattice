import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandInformationComponent } from './band-information.component';

describe('BandInformationComponent', () => {
  let component: BandInformationComponent;
  let fixture: ComponentFixture<BandInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
