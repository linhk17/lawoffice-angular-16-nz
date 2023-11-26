import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterFeesComponent } from './matter-fees.component';

describe('MatterFeesComponent', () => {
  let component: MatterFeesComponent;
  let fixture: ComponentFixture<MatterFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterFeesComponent]
    });
    fixture = TestBed.createComponent(MatterFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
