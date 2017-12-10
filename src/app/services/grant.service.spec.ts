import { TestBed, inject } from '@angular/core/testing';

import { GrantService } from './grant.service';

describe('GrantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrantService]
    });
  });

  it('should be created', inject([GrantService], (service: GrantService) => {
    expect(service).toBeTruthy();
  }));
});
