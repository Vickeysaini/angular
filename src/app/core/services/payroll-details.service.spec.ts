import { TestBed } from '@angular/core/testing';

import { PayrollDetailsService } from './payroll-details.service';

describe('PayrollDetailsService', () => {
  let service: PayrollDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
