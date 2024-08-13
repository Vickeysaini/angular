import { TestBed } from '@angular/core/testing';

import { UtilizationSummaryService } from './utilization-summary.service';

describe('UtilizationSummaryService', () => {
  let service: UtilizationSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilizationSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
