import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNewPasswordComponent } from './type-new-password.component';

describe('TypeNewPasswordComponent', () => {
  let component: TypeNewPasswordComponent;
  let fixture: ComponentFixture<TypeNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
