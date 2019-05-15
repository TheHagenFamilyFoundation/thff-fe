import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOpenFullProposalComponent } from './director-open-full-proposal.component';

describe('DirectorOpenFullProposalComponent', () => {
  let component: DirectorOpenFullProposalComponent;
  let fixture: ComponentFixture<DirectorOpenFullProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOpenFullProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOpenFullProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
