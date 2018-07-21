import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSelectedOrganizationComponent } from './director-selected-organization.component';

describe('DirectorSelectedOrganizationComponent', () => {
  let component: DirectorSelectedOrganizationComponent;
  let fixture: ComponentFixture<DirectorSelectedOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorSelectedOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSelectedOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
