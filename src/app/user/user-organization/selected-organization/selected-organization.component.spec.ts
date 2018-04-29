import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOrganizationComponent } from './selected-organization.component';

describe('SelectedOrganizationComponent', () => {
  let component: SelectedOrganizationComponent;
  let fixture: ComponentFixture<SelectedOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
