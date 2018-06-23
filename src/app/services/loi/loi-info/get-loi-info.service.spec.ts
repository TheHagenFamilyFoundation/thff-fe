import { TestBed, inject } from '@angular/core/testing';

import { GetLoiInfoService } from './get-loi-info.service';

describe('GetLoiInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLoiInfoService]
    });
  });

  it('should be created', inject([GetLoiInfoService], (service: GetLoiInfoService) => {
    expect(service).toBeTruthy();
  }));
});
