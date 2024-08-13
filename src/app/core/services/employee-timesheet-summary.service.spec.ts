import { TestBed } from '@angular/core/testing';

import { EmployeeTimesheetSummaryService } from './employee-timesheet-summary.service';

describe('EmployeeTimesheetSummaryService', () => {
  let service: EmployeeTimesheetSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTimesheetSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
