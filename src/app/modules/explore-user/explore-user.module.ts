import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExploreUserRoutingModule } from './explore-user-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    RequestQuoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExploreUserRoutingModule,
    SharedModule
  ]
})
export class ExploreUserModule { }
