import { TestBed } from '@angular/core/testing';

import { NotifyRejectService } from './notify-reject.service';

describe('NotifyRejectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifyRejectService = TestBed.get(NotifyRejectService);
    expect(service).toBeTruthy();
  });
});
