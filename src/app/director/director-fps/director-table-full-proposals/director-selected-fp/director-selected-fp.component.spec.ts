import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSelectedFPComponent } from './director-selected-fp.component';

describe('DirectorSelectedFPComponent', () => {
  let component: DirectorSelectedFPComponent;
  let fixture: ComponentFixture<DirectorSelectedFPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorSelectedFPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSelectedFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
