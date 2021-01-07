import { TestBed } from '@angular/core/testing';

import { FutureDataService } from './future-data.service';

describe('FutureDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FutureDataService = TestBed.get(FutureDataService);
    expect(service).toBeTruthy();
  });
});
