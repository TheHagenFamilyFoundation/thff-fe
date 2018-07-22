import { TestBed, inject } from '@angular/core/testing';

import { Doc501c3StatusService } from './doc501c3-status.service';

describe('Doc501c3StatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Doc501c3StatusService]
    });
  });

  it('should be created', inject([Doc501c3StatusService], (service: Doc501c3StatusService) => {
    expect(service).toBeTruthy();
  }));
});
