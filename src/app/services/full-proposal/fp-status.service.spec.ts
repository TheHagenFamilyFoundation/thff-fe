import { TestBed } from '@angular/core/testing';

import { FpStatusService } from './fp-status.service';

describe('FpStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FpStatusService = TestBed.get(FpStatusService);
    expect(service).toBeTruthy();
  });
});
