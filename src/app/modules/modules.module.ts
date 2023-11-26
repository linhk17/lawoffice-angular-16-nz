import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from '../app-routing.module';
import { QuoteModule } from './quote/quote.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from './calendar/calendar.module';
import { MatterModule } from './matter/matter.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    QuoteModule,
    CalendarModule,
    MatterModule,
    SharedModule
  ],
})
export class ModulesModule { }
