import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterStepsComponent } from './matter-steps.component';

describe('MatterStepsComponent', () => {
  let component: MatterStepsComponent;
  let fixture: ComponentFixture<MatterStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterStepsComponent]
    });
    fixture = TestBed.createComponent(MatterStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
