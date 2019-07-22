import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompentenciesInfoComponent } from './compentencies-info.component';

describe('CompentenciesInfoComponent', () => {
  let component: CompentenciesInfoComponent;
  let fixture: ComponentFixture<CompentenciesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompentenciesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompentenciesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
