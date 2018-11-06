import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFullProposalComponent } from './create-full-proposal.component';

describe('CreateFullProposalComponent', () => {
  let component: CreateFullProposalComponent;
  let fixture: ComponentFixture<CreateFullProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFullProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFullProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
