import { TestBed, inject } from '@angular/core/testing';

import { DeleteOrganizationInfoService } from './delete-organization-info.service';

describe('DeleteOrganizationInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteOrganizationInfoService]
    });
  });

  it('should be created', inject([DeleteOrganizationInfoService], (service: DeleteOrganizationInfoService) => {
    expect(service).toBeTruthy();
  }));
});
