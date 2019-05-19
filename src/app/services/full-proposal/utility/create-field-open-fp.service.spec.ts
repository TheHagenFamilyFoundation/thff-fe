import { TestBed } from '@angular/core/testing';

import { CreateFieldOpenFpService } from './create-field-open-fp.service';

describe('CreateFieldOpenFpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFieldOpenFpService = TestBed.get(CreateFieldOpenFpService);
    expect(service).toBeTruthy();
  });
});
