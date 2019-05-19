import { TestBed } from '@angular/core/testing';

import { OpenLoiFpService } from './open-loi-fp.service';

describe('OpenLoiFpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenLoiFpService = TestBed.get(OpenLoiFpService);
    expect(service).toBeTruthy();
  });
});
