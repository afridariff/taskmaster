import { TestBed } from '@angular/core/testing';

import { DisplaytasksService } from './displaytasks.service';

describe('DisplaytasksService', () => {
  let service: DisplaytasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaytasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
