import { TestBed } from '@angular/core/testing';

import { OpenFpPortalService } from './open-fp-portal.service';

describe('OpenFpPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenFpPortalService = TestBed.get(OpenFpPortalService);
    expect(service).toBeTruthy();
  });
});
