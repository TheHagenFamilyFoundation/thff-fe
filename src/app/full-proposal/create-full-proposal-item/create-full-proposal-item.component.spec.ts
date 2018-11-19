import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFullProposalItemComponent } from './create-full-proposal-item.component';

describe('CreateFullProposalItemComponent', () => {
  let component: CreateFullProposalItemComponent;
  let fixture: ComponentFixture<CreateFullProposalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFullProposalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFullProposalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
