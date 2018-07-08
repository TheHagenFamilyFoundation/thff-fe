import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDoc501c3Component } from './organization-doc501c3.component';

describe('OrganizationDoc501c3Component', () => {
  let component: OrganizationDoc501c3Component;
  let fixture: ComponentFixture<OrganizationDoc501c3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDoc501c3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDoc501c3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
