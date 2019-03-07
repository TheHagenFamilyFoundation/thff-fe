import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgLoiVotingComponent } from './director-org-loi-voting.component';

describe('DirectorOrgLoiVotingComponent', () => {
  let component: DirectorOrgLoiVotingComponent;
  let fixture: ComponentFixture<DirectorOrgLoiVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgLoiVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgLoiVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
