import { TestBed, inject } from '@angular/core/testing';

import { CreateOrganizationsService } from './create-organizations.service';

describe('CreateOrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateOrganizationsService]
    });
  });

  it('should be created', inject([CreateOrganizationsService], (service: CreateOrganizationsService) => {
    expect(service).toBeTruthy();
  }));
});
