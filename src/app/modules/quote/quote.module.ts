import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageQuoteComponent } from './manage-quote/manage-quote.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManageQuoteComponent,
    RequestQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class QuoteModule { }
