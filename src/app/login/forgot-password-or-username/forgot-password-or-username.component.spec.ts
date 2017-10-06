import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordOrUsernameComponent } from './forgot-password-or-username.component';

describe('ForgotPasswordOrUsernameComponent', () => {
  let component: ForgotPasswordOrUsernameComponent;
  let fixture: ComponentFixture<ForgotPasswordOrUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordOrUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordOrUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
