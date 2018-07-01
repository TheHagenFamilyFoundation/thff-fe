import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationHeaderComponent } from './create-organization-header.component';

describe('CreateOrganizationHeaderComponent', () => {
  let component: CreateOrganizationHeaderComponent;
  let fixture: ComponentFixture<CreateOrganizationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
