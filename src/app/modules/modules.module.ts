import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from '../app-routing.module';
import { QuoteModule } from './quote/quote.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    SharedModule
  ]
})
export class ModulesModule { }
