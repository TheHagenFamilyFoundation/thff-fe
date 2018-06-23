import { TestBed, inject } from '@angular/core/testing';

import { CreateLoiInfoService } from './create-loi-info.service';

describe('CreateLoiInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLoiInfoService]
    });
  });

  it('should be created', inject([CreateLoiInfoService], (service: CreateLoiInfoService) => {
    expect(service).toBeTruthy();
  }));
});
