import { TestBed } from '@angular/core/testing';

import { ProjectMatrixService } from './project-matrix.service';

describe('ProjectMatrixService', () => {
  let service: ProjectMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
