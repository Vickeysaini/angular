import { TestBed } from '@angular/core/testing';

import { TimesheetApprovelStatusService } from './timesheet-approvel-status.service';

describe('TimesheetApprovelStatusService', () => {
  let service: TimesheetApprovelStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetApprovelStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
