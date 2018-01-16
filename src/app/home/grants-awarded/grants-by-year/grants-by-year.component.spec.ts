import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsByYearComponent } from './grants-by-year.component';

describe('GrantsByYearComponent', () => {
  let component: GrantsByYearComponent;
  let fixture: ComponentFixture<GrantsByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
