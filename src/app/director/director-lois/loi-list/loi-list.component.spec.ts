import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoiListComponent } from './loi-list.component';

describe('LoiListComponent', () => {
  let component: LoiListComponent;
  let fixture: ComponentFixture<LoiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
