import { TestBed, inject } from '@angular/core/testing';

import { Validate501c3Service } from './validate-501c3.service';

describe('Validate501c3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Validate501c3Service]
    });
  });

  it('should be created', inject([Validate501c3Service], (service: Validate501c3Service) => {
    expect(service).toBeTruthy();
  }));
});
