import { TestBed } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';

describe('DataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProviderService = TestBed.get(DataProviderService);
    expect(service).toBeTruthy();
  });
});
