import { TestBed } from '@angular/core/testing';

import { PrintTimesheetService } from './print-timesheet.service';

describe('PrintTimesheetService', () => {
  let service: PrintTimesheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintTimesheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
