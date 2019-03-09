import { TestBed } from '@angular/core/testing';

import { GetPrevLoiService } from './get-prev-loi.service';

describe('GetPrevLoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPrevLoiService = TestBed.get(GetPrevLoiService);
    expect(service).toBeTruthy();
  });
});
