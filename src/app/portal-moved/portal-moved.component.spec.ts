import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMovedComponent } from './portal-moved.component';

describe('PortalMovedComponent', () => {
  let component: PortalMovedComponent;
  let fixture: ComponentFixture<PortalMovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalMovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalMovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
