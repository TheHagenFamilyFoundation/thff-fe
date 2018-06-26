import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentStatusComponent } from './letter-of-intent-status.component';

describe('LetterOfIntentStatusComponent', () => {
  let component: LetterOfIntentStatusComponent;
  let fixture: ComponentFixture<LetterOfIntentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
