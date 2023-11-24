import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuoteComponent } from './manage-quote/manage-quote.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { CalendarModule } from '../calendar/calendar.module';
import { ModalAddCalendarComponent } from '../calendar/modal-add-calendar/modal-add-calendar.component';



@NgModule({
  declarations: [
    ManageQuoteComponent,
    RequestQuoteComponent,
    QuoteDetailComponent,
    QuoteEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CalendarModule
  ]
})
export class QuoteModule { }
