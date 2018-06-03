import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRequestsComponent } from './organization-requests.component';

describe('OrganizationRequestsComponent', () => {
  let component: OrganizationRequestsComponent;
  let fixture: ComponentFixture<OrganizationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
