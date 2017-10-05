import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetintComponent } from './letint.component';

describe('LetintComponent', () => {
  let component: LetintComponent;
  let fixture: ComponentFixture<LetintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
