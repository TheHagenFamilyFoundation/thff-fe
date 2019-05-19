import { TestBed } from '@angular/core/testing';

import { SubmissionYearService } from './submission-year.service';

describe('SubmissionYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmissionYearService = TestBed.get(SubmissionYearService);
    expect(service).toBeTruthy();
  });
});
