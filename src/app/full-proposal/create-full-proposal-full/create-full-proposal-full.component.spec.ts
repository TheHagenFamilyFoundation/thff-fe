import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFullProposalFullComponent } from './create-full-proposal-full.component';

describe('CreateFullProposalFullComponent', () => {
  let component: CreateFullProposalFullComponent;
  let fixture: ComponentFixture<CreateFullProposalFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFullProposalFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFullProposalFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
