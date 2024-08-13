import { TestBed } from '@angular/core/testing';

import { MyExpenseService } from './my-expense.service';

describe('MyExpenseService', () => {
  let service: MyExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
