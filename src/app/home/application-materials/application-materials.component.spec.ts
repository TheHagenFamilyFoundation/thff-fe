import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMaterialsComponent } from './application-materials.component';

describe('ApplicationMaterialsComponent', () => {
  let component: ApplicationMaterialsComponent;
  let fixture: ComponentFixture<ApplicationMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
