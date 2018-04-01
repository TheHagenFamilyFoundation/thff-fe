import { TestBed, inject } from '@angular/core/testing';

import { GetOrganizationsService } from './get-organizations.service';

describe('GetOrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrganizationsService]
    });
  });

  it('should be created', inject([GetOrganizationsService], (service: GetOrganizationsService) => {
    expect(service).toBeTruthy();
  }));
});
