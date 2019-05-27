import { TestBed } from '@angular/core/testing';

import { UpdateFullProposalService } from './update-full-proposal.service';

describe('UpdateFullProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateFullProposalService = TestBed.get(UpdateFullProposalService);
    expect(service).toBeTruthy();
  });
});
