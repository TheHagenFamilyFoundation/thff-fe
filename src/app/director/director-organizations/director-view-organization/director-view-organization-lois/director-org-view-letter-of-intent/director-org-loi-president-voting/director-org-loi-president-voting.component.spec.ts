import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgLoiPresidentVotingComponent } from './director-org-loi-president-voting.component';

describe('DirectorOrgLoiPresidentVotingComponent', () => {
  let component: DirectorOrgLoiPresidentVotingComponent;
  let fixture: ComponentFixture<DirectorOrgLoiPresidentVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgLoiPresidentVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgLoiPresidentVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
