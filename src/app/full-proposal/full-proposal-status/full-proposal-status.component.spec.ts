import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProposalStatusComponent } from './full-proposal-status.component';

describe('FullProposalStatusComponent', () => {
  let component: FullProposalStatusComponent;
  let fixture: ComponentFixture<FullProposalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProposalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProposalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
