import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentSubmitCheckComponent } from './letter-of-intent-submit-check.component';

describe('LetterOfIntentSubmitCheckComponent', () => {
  let component: LetterOfIntentSubmitCheckComponent;
  let fixture: ComponentFixture<LetterOfIntentSubmitCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentSubmitCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentSubmitCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
