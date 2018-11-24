import { TestBed, inject } from '@angular/core/testing';

import { ValidResetCodeService } from './valid-resetcode.service';

describe('ValidResetcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidResetCodeService]
    });
  });

  it('should be created', inject([ValidResetCodeService], (service: ValidResetCodeService) => {
    expect(service).toBeTruthy();
  }));
});
