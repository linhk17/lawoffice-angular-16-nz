import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCalendarComponent } from './manage-calendar.component';

describe('ManageCalendarComponent', () => {
  let component: ManageCalendarComponent;
  let fixture: ComponentFixture<ManageCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCalendarComponent]
    });
    fixture = TestBed.createComponent(ManageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
