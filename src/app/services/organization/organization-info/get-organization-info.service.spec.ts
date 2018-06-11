import { TestBed, inject } from '@angular/core/testing';

import { GetOrganizationInfoService } from './get-organization-info.service';

describe('GetOrganizationInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrganizationInfoService]
    });
  });

  it('should be created', inject([GetOrganizationInfoService], (service: GetOrganizationInfoService) => {
    expect(service).toBeTruthy();
  }));
});
