import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentInfoComponent } from './letter-of-intent-info.component';

describe('LetterOfIntentInfoComponent', () => {
  let component: LetterOfIntentInfoComponent;
  let fixture: ComponentFixture<LetterOfIntentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
