import { TestBed, inject } from '@angular/core/testing';

import { GrantApiService } from './grant-api.service';

describe('GrantApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrantApiService]
    });
  });

  it('should be created', inject([GrantApiService], (service: GrantApiService) => {
    expect(service).toBeTruthy();
  }));
});
