import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFullProposalItemsComponent } from './create-full-proposal-items.component';

describe('CreateFullProposalItemsComponent', () => {
  let component: CreateFullProposalItemsComponent;
  let fixture: ComponentFixture<CreateFullProposalItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFullProposalItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFullProposalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
