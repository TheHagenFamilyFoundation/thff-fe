import { TestBed, inject } from '@angular/core/testing';

import { GetOrganizationService } from './get-organization.service';

describe('GetOrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrganizationService]
    });
  });

  it('should be created', inject([GetOrganizationService], (service: GetOrganizationService) => {
    expect(service).toBeTruthy();
  }));
});
