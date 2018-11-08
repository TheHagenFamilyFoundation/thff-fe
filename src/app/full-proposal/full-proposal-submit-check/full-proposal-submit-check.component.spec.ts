import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProposalSubmitCheckComponent } from './full-proposal-submit-check.component';

describe('FullProposalSubmitCheckComponent', () => {
  let component: FullProposalSubmitCheckComponent;
  let fixture: ComponentFixture<FullProposalSubmitCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProposalSubmitCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProposalSubmitCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
