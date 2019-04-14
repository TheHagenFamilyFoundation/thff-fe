import { TestBed } from '@angular/core/testing';

import { DirectorVotingService } from './director-voting.service';

describe('DirectorVotingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorVotingService = TestBed.get(DirectorVotingService);
    expect(service).toBeTruthy();
  });
});
