import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorViewOrganizationInfoComponent } from './director-view-organization-info.component';

describe('DirectorViewOrganizationInfoComponent', () => {
  let component: DirectorViewOrganizationInfoComponent;
  let fixture: ComponentFixture<DirectorViewOrganizationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorViewOrganizationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorViewOrganizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
