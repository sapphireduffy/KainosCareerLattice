import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTableComponent } from './career-table.component';

describe('CareerTableComponent', () => {
  let component: CareerTableComponent;
  let fixture: ComponentFixture<CareerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CareerTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
