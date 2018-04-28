import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrantRequestsComponent } from './user-grant-requests.component';

describe('UserGrantRequestsComponent', () => {
  let component: UserGrantRequestsComponent;
  let fixture: ComponentFixture<UserGrantRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGrantRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGrantRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
