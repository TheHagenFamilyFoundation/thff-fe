import { TestBed, inject } from '@angular/core/testing';

import { ValidResetcodeService } from './valid-resetcode.service';

describe('ValidResetcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidResetcodeService]
    });
  });

  it('should be created', inject([ValidResetcodeService], (service: ValidResetcodeService) => {
    expect(service).toBeTruthy();
  }));
});
