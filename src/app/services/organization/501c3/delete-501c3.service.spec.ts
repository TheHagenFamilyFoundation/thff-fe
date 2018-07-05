import { TestBed, inject } from '@angular/core/testing';

import { Delete501c3Service } from './delete-501c3.service';

describe('Delete501c3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Delete501c3Service]
    });
  });

  it('should be created', inject([Delete501c3Service], (service: Delete501c3Service) => {
    expect(service).toBeTruthy();
  }));
});
