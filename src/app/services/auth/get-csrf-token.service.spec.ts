import { TestBed, inject } from '@angular/core/testing';

import { GetCSRFTokenService } from './get-csrf-token.service';

describe('GetCSRFTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCSRFTokenService]
    });
  });

  it('should be created', inject([GetCSRFTokenService], (service: GetCSRFTokenService) => {
    expect(service).toBeTruthy();
  }));
});
