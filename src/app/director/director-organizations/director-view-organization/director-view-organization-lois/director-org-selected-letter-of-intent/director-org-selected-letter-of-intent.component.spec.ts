import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgSelectedLetterOfIntentComponent } from './director-org-selected-letter-of-intent.component';

describe('DirectorOrgSelectedLetterOfIntentComponent', () => {
  let component: DirectorOrgSelectedLetterOfIntentComponent;
  let fixture: ComponentFixture<DirectorOrgSelectedLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgSelectedLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgSelectedLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
