import { TestBed, inject } from '@angular/core/testing';

import { CreateLoiService } from './create-loi.service';

describe('CreateLoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLoiService]
    });
  });

  it('should be created', inject([CreateLoiService], (service: CreateLoiService) => {
    expect(service).toBeTruthy();
  }));
});
