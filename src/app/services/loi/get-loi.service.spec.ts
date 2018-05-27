import { TestBed, inject } from '@angular/core/testing';

import { GetLoiService } from './get-loi.service';

describe('GetLoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLoiService]
    });
  });

  it('should be created', inject([GetLoiService], (service: GetLoiService) => {
    expect(service).toBeTruthy();
  }));
});
