import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterFormComponent } from './matter-form.component';

describe('MatterFormComponent', () => {
  let component: MatterFormComponent;
  let fixture: ComponentFixture<MatterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterFormComponent]
    });
    fixture = TestBed.createComponent(MatterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
