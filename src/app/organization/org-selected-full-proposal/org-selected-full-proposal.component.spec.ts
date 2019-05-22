import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSelectedFullProposalComponent } from './org-selected-full-proposal.component';

describe('OrgSelectedFullProposalComponent', () => {
  let component: OrgSelectedFullProposalComponent;
  let fixture: ComponentFixture<OrgSelectedFullProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSelectedFullProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSelectedFullProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
