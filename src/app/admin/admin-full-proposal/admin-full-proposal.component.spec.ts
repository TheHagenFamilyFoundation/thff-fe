import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFullProposalComponent } from './admin-full-proposal.component';

describe('AdminFullProposalComponent', () => {
  let component: AdminFullProposalComponent;
  let fixture: ComponentFixture<AdminFullProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFullProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFullProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
