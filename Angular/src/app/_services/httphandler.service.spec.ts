import { TestBed } from '@angular/core/testing';

import { HttphandlerService } from './httphandler.service';

describe('HttphandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttphandlerService = TestBed.get(HttphandlerService);
    expect(service).toBeTruthy();
  });
});
