import { TestBed } from '@angular/core/testing';

import { ProjectExpenseLogByDayService } from './project-expense-log-by-day.service';

describe('ProjectExpenseLogByDayService', () => {
  let service: ProjectExpenseLogByDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectExpenseLogByDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
