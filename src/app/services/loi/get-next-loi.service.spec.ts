import { TestBed } from '@angular/core/testing';

import { GetNextLoiService } from './get-next-loi.service';

describe('GetNextLoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNextLoiService = TestBed.get(GetNextLoiService);
    expect(service).toBeTruthy();
  });
});
