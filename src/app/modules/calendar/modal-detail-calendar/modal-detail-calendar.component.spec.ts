import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailCalendarComponent } from './modal-detail-calendar.component';

describe('ModalDetailCalendarComponent', () => {
  let component: ModalDetailCalendarComponent;
  let fixture: ComponentFixture<ModalDetailCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDetailCalendarComponent]
    });
    fixture = TestBed.createComponent(ModalDetailCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
