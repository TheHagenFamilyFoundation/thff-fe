import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoiSubmitCheckComponent } from './loi-submit-check.component';

describe('LoiSubmitCheckComponent', () => {
  let component: LoiSubmitCheckComponent;
  let fixture: ComponentFixture<LoiSubmitCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoiSubmitCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoiSubmitCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
