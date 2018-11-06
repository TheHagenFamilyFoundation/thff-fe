import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProposalInfoComponent } from './full-proposal-info.component';

describe('FullProposalInfoComponent', () => {
  let component: FullProposalInfoComponent;
  let fixture: ComponentFixture<FullProposalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProposalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProposalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
