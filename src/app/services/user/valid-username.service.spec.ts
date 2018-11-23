import { TestBed, inject } from '@angular/core/testing';

import { ValidUserNameService } from './valid-username.service';

describe('ValidUsernameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidUserNameService]
    });
  });

  it('should be created', inject([ValidUserNameService], (service: ValidUserNameService) => {
    expect(service).toBeTruthy();
  }));
});
