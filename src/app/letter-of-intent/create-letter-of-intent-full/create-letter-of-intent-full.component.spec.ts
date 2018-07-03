import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLetterOfIntentFullComponent } from './create-letter-of-intent-full.component';

describe('CreateLetterOfIntentFullComponent', () => {
  let component: CreateLetterOfIntentFullComponent;
  let fixture: ComponentFixture<CreateLetterOfIntentFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLetterOfIntentFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLetterOfIntentFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
