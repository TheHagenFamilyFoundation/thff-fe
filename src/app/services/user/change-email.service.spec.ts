import { TestBed, inject } from '@angular/core/testing';

import { ChangeEmailService } from './change-email.service';

describe('ChangeEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeEmailService]
    });
  });

  it('should be created', inject([ChangeEmailService], (service: ChangeEmailService) => {
    expect(service).toBeTruthy();
  }));
});
