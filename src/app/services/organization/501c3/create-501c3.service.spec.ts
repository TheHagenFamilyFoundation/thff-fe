import { TestBed, inject } from '@angular/core/testing';

import { Create501c3Service } from './create-501c3.service';

describe('Create501c3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Create501c3Service]
    });
  });

  it('should be created', inject([Create501c3Service], (service: Create501c3Service) => {
    expect(service).toBeTruthy();
  }));
});
