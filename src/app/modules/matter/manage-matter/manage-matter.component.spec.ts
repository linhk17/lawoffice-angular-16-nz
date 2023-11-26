import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMatterComponent } from './manage-matter.component';

describe('ManageMatterComponent', () => {
  let component: ManageMatterComponent;
  let fixture: ComponentFixture<ManageMatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMatterComponent]
    });
    fixture = TestBed.createComponent(ManageMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
