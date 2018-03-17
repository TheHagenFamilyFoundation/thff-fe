import { TestBed, inject } from '@angular/core/testing';

import { GetEmailService } from './get-email.service';

describe('GetEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEmailService]
    });
  });

  it('should be created', inject([GetEmailService], (service: GetEmailService) => {
    expect(service).toBeTruthy();
  }));
});
