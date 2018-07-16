import { TestBed, inject } from '@angular/core/testing';

import { LOIStatusService } from './loi-status.service';

describe('LOIStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LOIStatusService]
    });
  });

  it('should be created', inject([LOIStatusService], (service: LOIStatusService) => {
    expect(service).toBeTruthy();
  }));
});
