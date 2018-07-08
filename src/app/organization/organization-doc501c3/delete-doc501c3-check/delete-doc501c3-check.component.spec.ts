import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDoc501c3CheckComponent } from './delete-doc501c3-check.component';

describe('DeleteDoc501c3CheckComponent', () => {
  let component: DeleteDoc501c3CheckComponent;
  let fixture: ComponentFixture<DeleteDoc501c3CheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDoc501c3CheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDoc501c3CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
