import { TestBed } from '@angular/core/testing';

import { HttphandlerService } from './httphandler.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HttphandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      HttpHandler,
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: HttphandlerService = TestBed.get(HttphandlerService);
    expect(service).toBeTruthy();
  });
});
