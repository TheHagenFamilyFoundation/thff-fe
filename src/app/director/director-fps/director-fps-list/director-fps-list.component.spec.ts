import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorFpsListComponent } from './director-fps-list.component';

describe('DirectorFpsListComponent', () => {
  let component: DirectorFpsListComponent;
  let fixture: ComponentFixture<DirectorFpsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorFpsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorFpsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
