import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUsernameComponent } from './Reset-username.component';

describe('ResetUsernameComponent', () => {
  let component: ResetUsernameComponent;
  let fixture: ComponentFixture<ResetUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
