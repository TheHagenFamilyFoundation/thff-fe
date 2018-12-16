import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFullProposalsComponent } from './organization-full-proposals.component';

describe('OrganizationFullProposalsComponent', () => {
  let component: OrganizationFullProposalsComponent;
  let fixture: ComponentFixture<OrganizationFullProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationFullProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationFullProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
