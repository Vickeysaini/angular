import { TestBed } from '@angular/core/testing';

import { PayrollSummaryService } from './payroll-summary.service';

describe('PayrollSummaryService', () => {
  let service: PayrollSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
