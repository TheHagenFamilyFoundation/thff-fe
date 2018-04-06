import { TestBed, inject } from '@angular/core/testing';

import { CreateOrganizationService } from './create-organization.service';

describe('CreateOrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateOrganizationService]
    });
  });

  it('should be created', inject([CreateOrganizationService], (service: CreateOrganizationService) => {
    expect(service).toBeTruthy();
  }));
});
