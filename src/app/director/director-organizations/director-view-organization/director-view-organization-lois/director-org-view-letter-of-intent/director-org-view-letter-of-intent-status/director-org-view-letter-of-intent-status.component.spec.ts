import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgViewLetterOfIntentStatusComponent } from './director-org-view-letter-of-intent-status.component';

describe('DirectorOrgViewLetterOfIntentStatusComponent', () => {
  let component: DirectorOrgViewLetterOfIntentStatusComponent;
  let fixture: ComponentFixture<DirectorOrgViewLetterOfIntentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgViewLetterOfIntentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgViewLetterOfIntentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
