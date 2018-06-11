import { TestBed, inject } from '@angular/core/testing';

import { GetOrganizatonInfoService } from './get-organizaton-info.service';

describe('GetOrganizatonInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrganizatonInfoService]
    });
  });

  it('should be created', inject([GetOrganizatonInfoService], (service: GetOrganizatonInfoService) => {
    expect(service).toBeTruthy();
  }));
});
