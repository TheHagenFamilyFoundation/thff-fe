import { TestBed, inject } from '@angular/core/testing';

import { CreateOrganizationInfoService } from './create-organization-info.service';

describe('CreateOrganizationInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateOrganizationInfoService]
    });
  });

  it('should be created', inject([CreateOrganizationInfoService], (service: CreateOrganizationInfoService) => {
    expect(service).toBeTruthy();
  }));
});
