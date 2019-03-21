import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateMainComponent } from './user-update-main.component';

describe('UserUpdateMainComponent', () => {
  let component: UserUpdateMainComponent;
  let fixture: ComponentFixture<UserUpdateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
