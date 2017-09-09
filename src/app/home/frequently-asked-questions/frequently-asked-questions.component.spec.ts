import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions.component';

describe('FrequentlyAskedQuestionsComponent', () => {
  let component: FrequentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<FrequentlyAskedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyAskedQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
