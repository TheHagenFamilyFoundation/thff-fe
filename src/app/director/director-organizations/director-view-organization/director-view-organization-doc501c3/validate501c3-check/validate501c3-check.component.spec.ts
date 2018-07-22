import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Validate501c3CheckComponent } from './validate501c3-check.component';

describe('Validate501c3CheckComponent', () => {
  let component: Validate501c3CheckComponent;
  let fixture: ComponentFixture<Validate501c3CheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Validate501c3CheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Validate501c3CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
