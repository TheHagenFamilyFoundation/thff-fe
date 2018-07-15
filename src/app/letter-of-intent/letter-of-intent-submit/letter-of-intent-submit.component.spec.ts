import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentSubmitComponent } from './letter-of-intent-submit.component';

describe('LetterOfIntentSubmitComponent', () => {
  let component: LetterOfIntentSubmitComponent;
  let fixture: ComponentFixture<LetterOfIntentSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
