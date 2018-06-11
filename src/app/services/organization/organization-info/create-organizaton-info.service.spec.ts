import { TestBed, inject } from '@angular/core/testing';

import { CreateOrganizatonInfoService } from './create-organizaton-info.service';

describe('CreateOrganizatonInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateOrganizatonInfoService]
    });
  });

  it('should be created', inject([CreateOrganizatonInfoService], (service: CreateOrganizatonInfoService) => {
    expect(service).toBeTruthy();
  }));
});
