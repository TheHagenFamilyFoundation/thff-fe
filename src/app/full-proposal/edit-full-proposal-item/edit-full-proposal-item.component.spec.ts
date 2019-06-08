import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFullProposalItemComponent } from './edit-full-proposal-item.component';

describe('EditFullProposalItemComponent', () => {
  let component: EditFullProposalItemComponent;
  let fixture: ComponentFixture<EditFullProposalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFullProposalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFullProposalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
