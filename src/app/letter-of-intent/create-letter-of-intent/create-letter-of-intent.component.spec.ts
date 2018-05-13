import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLetterOfIntentComponent } from './create-letter-of-intent.component';

describe('CreateLetterOfIntentComponent', () => {
  let component: CreateLetterOfIntentComponent;
  let fixture: ComponentFixture<CreateLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
