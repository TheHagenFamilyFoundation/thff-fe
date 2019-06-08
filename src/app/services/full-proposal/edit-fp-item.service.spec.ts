import { TestBed } from '@angular/core/testing';

import { EditFpItemService } from './edit-fp-item.service';

describe('EditFpItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditFpItemService = TestBed.get(EditFpItemService);
    expect(service).toBeTruthy();
  });
});
