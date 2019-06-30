import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSelectedFpComponent } from './director-selected-fp.component';

describe('DirectorSelectedFpComponent', () => {
  let component: DirectorSelectedFpComponent;
  let fixture: ComponentFixture<DirectorSelectedFpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorSelectedFpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSelectedFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
