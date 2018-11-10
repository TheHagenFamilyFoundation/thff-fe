import { TestBed } from '@angular/core/testing';

import { CreateFullProposalService } from './create-full-proposal.service';

describe('CreateFullProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFullProposalService = TestBed.get(CreateFullProposalService);
    expect(service).toBeTruthy();
  });
});
