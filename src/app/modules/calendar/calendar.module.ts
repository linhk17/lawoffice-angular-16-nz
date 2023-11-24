import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddCalendarComponent } from './modal-add-calendar/modal-add-calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManageCalendarComponent } from './manage-calendar/manage-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalDetailCalendarComponent } from './modal-detail-calendar/modal-detail-calendar.component';



@NgModule({
  declarations: [
    ModalAddCalendarComponent,
    ManageCalendarComponent,
    ModalDetailCalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule
  ],
  exports: [
    ModalAddCalendarComponent
  ]
})
export class CalendarModule { }
