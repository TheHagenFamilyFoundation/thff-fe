import { TestBed, inject } from '@angular/core/testing';

import { ResetCodeService } from './reset-code.service';

describe('ResetCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetCodeService]
    });
  });

  it('should be created', inject([ResetCodeService], (service: ResetCodeService) => {
    expect(service).toBeTruthy();
  }));
});
