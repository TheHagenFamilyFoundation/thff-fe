import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOrganizationsComponent } from './director-organizations.component';

describe('DirectorOrganizationsComponent', () => {
  let component: DirectorOrganizationsComponent;
  let fixture: ComponentFixture<DirectorOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
