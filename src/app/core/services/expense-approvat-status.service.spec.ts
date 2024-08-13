import { TestBed } from '@angular/core/testing';

import { ExpenseApprovatStatusService } from './expense-approvat-status.service';

describe('ExpenseApprovatStatusService', () => {
  let service: ExpenseApprovatStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseApprovatStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
