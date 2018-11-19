import { TestBed } from '@angular/core/testing';

import { CreateFpItemService } from './create-fp-item.service';

describe('CreateFpItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFpItemService = TestBed.get(CreateFpItemService);
    expect(service).toBeTruthy();
  });
});
