import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCalendarComponent } from './modal-add-calendar.component';

describe('ModalAddCalendarComponent', () => {
  let component: ModalAddCalendarComponent;
  let fixture: ComponentFixture<ModalAddCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddCalendarComponent]
    });
    fixture = TestBed.createComponent(ModalAddCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
