import { TestBed, inject } from '@angular/core/testing';

import { DeleteLoiInfoService } from './delete-loi-info.service';

describe('DeleteLoiInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteLoiInfoService]
    });
  });

  it('should be created', inject([DeleteLoiInfoService], (service: DeleteLoiInfoService) => {
    expect(service).toBeTruthy();
  }));
});
