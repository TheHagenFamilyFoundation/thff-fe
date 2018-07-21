import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorViewOrganizationLoisComponent } from './director-view-organization-lois.component';

describe('DirectorViewOrganizationLoisComponent', () => {
  let component: DirectorViewOrganizationLoisComponent;
  let fixture: ComponentFixture<DirectorViewOrganizationLoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorViewOrganizationLoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorViewOrganizationLoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
