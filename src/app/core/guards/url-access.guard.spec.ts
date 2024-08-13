import { TestBed } from '@angular/core/testing';

import { UrlAccessGuard } from './url-access.guard';

describe('UrlAccessGuard', () => {
  let guard: UrlAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UrlAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
