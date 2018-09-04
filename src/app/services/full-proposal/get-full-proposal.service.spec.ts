import { TestBed, inject } from '@angular/core/testing';

import { GetFullProposalService } from './get-full-proposal.service';

describe('GetFullProposalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFullProposalService]
    });
  });

  it('should be created', inject([GetFullProposalService], (service: GetFullProposalService) => {
    expect(service).toBeTruthy();
  }));
});
