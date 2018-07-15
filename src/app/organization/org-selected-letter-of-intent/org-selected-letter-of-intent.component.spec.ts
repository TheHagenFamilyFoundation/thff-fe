import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSelectedLetterOfIntentComponent } from './org-selected-letter-of-intent.component';

describe('LoiSubmitCheckComponent', () => {
  let component: OrgSelectedLetterOfIntentComponent;
  let fixture: ComponentFixture<OrgSelectedLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSelectedLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSelectedLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
