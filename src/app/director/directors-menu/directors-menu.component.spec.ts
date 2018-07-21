import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsMenuComponent } from './directors-menu.component';

describe('DirectorsMenuComponent', () => {
  let component: DirectorsMenuComponent;
  let fixture: ComponentFixture<DirectorsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
