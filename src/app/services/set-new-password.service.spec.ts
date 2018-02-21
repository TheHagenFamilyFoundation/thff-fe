import { TestBed, inject } from '@angular/core/testing';

import { SetNewPasswordService } from './set-new-password.service';

describe('SetNewPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetNewPasswordService]
    });
  });

  it('should be created', inject([SetNewPasswordService], (service: SetNewPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
