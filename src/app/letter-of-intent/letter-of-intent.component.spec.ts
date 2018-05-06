import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentComponent } from './letter-of-intent.component';

describe('LetterOfIntentComponent', () => {
  let component: LetterOfIntentComponent;
  let fixture: ComponentFixture<LetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
