import { TestBed } from '@angular/core/testing';

import { RemoveFpItemService } from './remove-fp-item.service';

describe('RemoveFpItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveFpItemService = TestBed.get(RemoveFpItemService);
    expect(service).toBeTruthy();
  });
});
