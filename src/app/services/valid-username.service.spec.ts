import { TestBed, inject } from '@angular/core/testing';

import { ValidUsernameService } from './valid-username.service';

describe('ValidUsernameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidUsernameService]
    });
  });

  it('should be created', inject([ValidUsernameService], (service: ValidUsernameService) => {
    expect(service).toBeTruthy();
  }));
});
