import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantProcessComponent } from './grant-process.component';

describe('GrantProcessComponent', () => {
  let component: GrantProcessComponent;
  let fixture: ComponentFixture<GrantProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
