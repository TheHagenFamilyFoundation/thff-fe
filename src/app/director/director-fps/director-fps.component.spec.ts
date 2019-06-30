import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorFpsComponent } from './director-fps.component';

describe('DirectorFpsComponent', () => {
  let component: DirectorFpsComponent;
  let fixture: ComponentFixture<DirectorFpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorFpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
