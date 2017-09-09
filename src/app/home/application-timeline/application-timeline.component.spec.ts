import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTimelineComponent } from './application-timeline.component';

describe('ApplicationTimelineComponent', () => {
  let component: ApplicationTimelineComponent;
  let fixture: ComponentFixture<ApplicationTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
