import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorViewOrganizationDoc501c3Component } from './director-view-organization-doc501c3.component';

describe('DirectorViewOrganizationDoc501c3Component', () => {
  let component: DirectorViewOrganizationDoc501c3Component;
  let fixture: ComponentFixture<DirectorViewOrganizationDoc501c3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorViewOrganizationDoc501c3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorViewOrganizationDoc501c3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
