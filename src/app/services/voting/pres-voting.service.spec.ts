import { TestBed } from '@angular/core/testing';

import { PresVotingService } from './pres-voting.service';

describe('PresVotingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresVotingService = TestBed.get(PresVotingService);
    expect(service).toBeTruthy();
  });
});
