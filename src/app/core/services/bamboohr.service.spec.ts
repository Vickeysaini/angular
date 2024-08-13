import { TestBed } from '@angular/core/testing';

import { BamboohrService } from './bamboohr.service';

describe('BamboohrService', () => {
  let service: BamboohrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BamboohrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});