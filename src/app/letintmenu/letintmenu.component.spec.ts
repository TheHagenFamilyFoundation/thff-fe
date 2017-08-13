import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetintmenuComponent } from './letintmenu.component';

describe('LetintmenuComponent', () => {
  let component: LetintmenuComponent;
  let fixture: ComponentFixture<LetintmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetintmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetintmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
