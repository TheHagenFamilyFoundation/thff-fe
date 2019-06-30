import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorTableFullProposalsComponent } from './director-table-full-proposals.component';

describe('DirectorTableFullProposalsComponent', () => {
  let component: DirectorTableFullProposalsComponent;
  let fixture: ComponentFixture<DirectorTableFullProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorTableFullProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorTableFullProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
