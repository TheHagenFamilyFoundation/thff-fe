import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorViewFPComponent } from './director-view-fp.component';

describe('DirectorViewFPComponent', () => {
  let component: DirectorViewFPComponent;
  let fixture: ComponentFixture<DirectorViewFPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorViewFPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorViewFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
