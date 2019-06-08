import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFullProposalItemComponent } from './delete-full-proposal-item.component';

describe('DeleteFullProposalItemComponent', () => {
  let component: DeleteFullProposalItemComponent;
  let fixture: ComponentFixture<DeleteFullProposalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFullProposalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFullProposalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
