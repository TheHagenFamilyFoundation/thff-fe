import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetintStatusComponent } from './letint-status.component';

describe('LetintStatusComponent', () => {
  let component: LetintStatusComponent;
  let fixture: ComponentFixture<LetintStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetintStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
