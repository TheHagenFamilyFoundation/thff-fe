import { TestBed } from '@angular/core/testing';

import { GetFpItemService } from './get-fp-item.service';

describe('GetFpItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFpItemService = TestBed.get(GetFpItemService);
    expect(service).toBeTruthy();
  });
});
