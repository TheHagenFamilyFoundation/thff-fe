import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordOrUsernameComponent } from './reset-password-or-forgot-username.component';

describe('ResetPasswordOrUsernameComponent', () => {
  let component: ResetPasswordOrUsernameComponent;
  let fixture: ComponentFixture<ResetPasswordOrUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordOrUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordOrUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
