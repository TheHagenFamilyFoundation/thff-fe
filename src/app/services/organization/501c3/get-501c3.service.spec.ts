import { TestBed, inject } from '@angular/core/testing';

import { Get501c3Service } from './get-501c3.service';

describe('Get501c3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Get501c3Service]
    });
  });

  it('should be created', inject([Get501c3Service], (service: Get501c3Service) => {
    expect(service).toBeTruthy();
  }));
});
