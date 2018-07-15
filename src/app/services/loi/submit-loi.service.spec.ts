import { TestBed, inject } from '@angular/core/testing';

import { SubmitLoiService } from './submit-loi.service';

describe('SubmitLoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitLoiService]
    });
  });

  it('should be created', inject([SubmitLoiService], (service: SubmitLoiService) => {
    expect(service).toBeTruthy();
  }));
});
