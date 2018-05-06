import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLetterOfIntentComponent } from './user-letter-of-intent.component';

describe('UserLetterOfIntentComponent', () => {
  let component: UserLetterOfIntentComponent;
  let fixture: ComponentFixture<UserLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
