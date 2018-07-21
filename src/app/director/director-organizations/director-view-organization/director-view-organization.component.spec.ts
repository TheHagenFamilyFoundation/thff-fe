import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorViewOrganizationComponent } from './director-view-organization.component';

describe('DirectorViewOrganizationsComponent', () => {
  let component: DirectorViewOrganizationComponent;
  let fixture: ComponentFixture<DirectorViewOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorViewOrganizationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorViewOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
