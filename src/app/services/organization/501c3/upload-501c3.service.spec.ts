import { TestBed, inject } from '@angular/core/testing';

import { Upload501c3Service } from './upload-501c3.service';

describe('Upload501c3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Upload501c3Service]
    });
  });

  it('should be created', inject([Upload501c3Service], (service: Upload501c3Service) => {
    expect(service).toBeTruthy();
  }));
});
