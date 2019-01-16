import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPRegisterComponent } from './gpregister.component';

describe('GPRegisterComponent', () => {
  let component: GPRegisterComponent;
  let fixture: ComponentFixture<GPRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
