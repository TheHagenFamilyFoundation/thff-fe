import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAwardedComponent } from './grants-awarded.component';

describe('GrantsAwardedComponent', () => {
  let component: GrantsAwardedComponent;
  let fixture: ComponentFixture<GrantsAwardedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAwardedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAwardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
