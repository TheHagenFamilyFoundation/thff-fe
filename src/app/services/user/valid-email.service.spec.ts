import { TestBed, inject } from '@angular/core/testing';

import { ValidEmailService } from '../services/valid-email.service';

describe('ValidEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidEmailService]
    });
  });

  it('should be created', inject([ValidEmailService], (service: ValidEmailService) => {
    expect(service).toBeTruthy();
  }));
});
