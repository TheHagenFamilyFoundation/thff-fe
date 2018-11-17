import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProposalItemsComponent } from './full-proposal-items.component';

describe('FullProposalItemsComponent', () => {
  let component: FullProposalItemsComponent;
  let fixture: ComponentFixture<FullProposalItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProposalItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProposalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
