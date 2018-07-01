import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationsComponent } from './view-organizations.component';

describe('ViewOrganizationsComponent', () => {
  let component: ViewOrganizationsComponent;
  let fixture: ComponentFixture<ViewOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
