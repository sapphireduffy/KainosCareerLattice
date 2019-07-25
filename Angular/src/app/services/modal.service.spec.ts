import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { DataService } from './data.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      DataService
    ]
  }));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
