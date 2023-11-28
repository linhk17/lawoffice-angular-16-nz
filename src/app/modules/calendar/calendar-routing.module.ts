import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageCalendarComponent } from './manage-calendar/manage-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: ManageCalendarComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
