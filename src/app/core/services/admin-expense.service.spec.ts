import { TestBed } from '@angular/core/testing';

import { AdminExpenseService } from './admin-expense.service';

describe('AdminExpenseService', () => {
  let service: AdminExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
