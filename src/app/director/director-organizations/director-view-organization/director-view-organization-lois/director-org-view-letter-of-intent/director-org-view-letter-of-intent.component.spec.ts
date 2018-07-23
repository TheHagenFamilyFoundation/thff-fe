import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgViewLetterOfIntentComponent } from './director-org-view-letter-of-intent.component';

describe('DirectorOrgViewLetterOfIntentComponent', () => {
  let component: DirectorOrgViewLetterOfIntentComponent;
  let fixture: ComponentFixture<DirectorOrgViewLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgViewLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgViewLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
