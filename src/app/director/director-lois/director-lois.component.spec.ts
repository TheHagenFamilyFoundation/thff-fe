import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorLoisComponent } from './director-lois.component';

describe('DirectorLoisComponent', () => {
  let component: DirectorLoisComponent;
  let fixture: ComponentFixture<DirectorLoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorLoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorLoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
