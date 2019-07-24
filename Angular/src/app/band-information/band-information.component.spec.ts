import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandInformationComponent } from './band-information.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockObjects } from '../mock-objects';

describe('BandInformationComponent', () => {
  let component: BandInformationComponent;
  let fixture: ComponentFixture<BandInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NgbActiveModal ],
      declarations: [ BandInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandInformationComponent);
    component = fixture.componentInstance;
    component.bandToDisplay = MockObjects.band
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
