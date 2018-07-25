import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSelectedLoiComponent } from './director-selected-loi.component';

describe('DirectorSelectedLoiComponent', () => {
  let component: DirectorSelectedLoiComponent;
  let fixture: ComponentFixture<DirectorSelectedLoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorSelectedLoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSelectedLoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
