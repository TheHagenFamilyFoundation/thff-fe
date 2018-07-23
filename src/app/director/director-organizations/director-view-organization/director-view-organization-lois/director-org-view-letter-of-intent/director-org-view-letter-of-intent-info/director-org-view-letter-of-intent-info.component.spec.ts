import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrgViewLetterOfIntentInfoComponent } from './director-org-view-letter-of-intent-info.component';

describe('DirectorOrgViewLetterOfIntentInfoComponent', () => {
  let component: DirectorOrgViewLetterOfIntentInfoComponent;
  let fixture: ComponentFixture<DirectorOrgViewLetterOfIntentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrgViewLetterOfIntentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrgViewLetterOfIntentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
