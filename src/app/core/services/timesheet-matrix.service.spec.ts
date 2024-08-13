import { TestBed } from '@angular/core/testing';

import { TimesheetMatrixService } from './timesheet-matrix.service';

describe('TimesheetMatrixService', () => {
  let service: TimesheetMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
