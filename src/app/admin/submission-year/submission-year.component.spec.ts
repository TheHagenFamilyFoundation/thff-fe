import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionYearComponent } from './submission-year.component';

describe('SubmissionYearComponent', () => {
  let component: SubmissionYearComponent;
  let fixture: ComponentFixture<SubmissionYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
