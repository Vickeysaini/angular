import { TestBed } from '@angular/core/testing';

import { ProjectExpenseLogbyEmployeeService } from './project-expense-logby-employee.service';

describe('ProjectExpenseLogbyEmployeeService', () => {
  let service: ProjectExpenseLogbyEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectExpenseLogbyEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
