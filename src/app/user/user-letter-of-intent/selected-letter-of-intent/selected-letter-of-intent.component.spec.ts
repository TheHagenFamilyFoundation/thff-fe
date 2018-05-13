import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLetterOfIntentComponent } from './selected-letter-of-intent.component';

describe('SelectedLetterOfIntentComponent', () => {
  let component: SelectedLetterOfIntentComponent;
  let fixture: ComponentFixture<SelectedLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
