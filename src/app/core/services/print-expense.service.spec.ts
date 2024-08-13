import { TestBed } from '@angular/core/testing';

import { PrintExpenseService } from './print-expense.service';

describe('PrintExpenseService', () => {
  let service: PrintExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
