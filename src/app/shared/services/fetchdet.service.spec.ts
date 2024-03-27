import { TestBed } from '@angular/core/testing';

import { FetchdetService } from './fetchdet.service';

describe('FetchdetService', () => {
  let service: FetchdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
