import { TestBed } from '@angular/core/testing';

import { MissingTimesheetsService } from './missing-timesheets.service';

describe('MissingTimesheetsService', () => {
  let service: MissingTimesheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissingTimesheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
