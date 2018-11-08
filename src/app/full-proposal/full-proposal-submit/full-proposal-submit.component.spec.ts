import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProposalSubmitComponent } from './full-proposal-submit.component';

describe('FullProposalSubmitComponent', () => {
  let component: FullProposalSubmitComponent;
  let fixture: ComponentFixture<FullProposalSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProposalSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProposalSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
