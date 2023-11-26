import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterDetailComponent } from './matter-detail.component';

describe('MatterDetailComponent', () => {
  let component: MatterDetailComponent;
  let fixture: ComponentFixture<MatterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatterDetailComponent]
    });
    fixture = TestBed.createComponent(MatterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
