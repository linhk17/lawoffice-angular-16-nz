import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { NgZorroModule } from './ngzorro/ngzorro.module';
import { IconsProviderModule } from './ngzorro/icons-provider.module';
import { dateFormatPipe } from './pipe/date.pipe';
import { CurrencyFormatPipe } from './pipe/currency.pipe';
import { TableDocumentsComponent } from './component/table-documents/table-documents.component';
import { StepsComponent } from './component/steps/steps.component';
import { PlaceAutocompleteDirective } from './directive/place-autocomplete.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputSearchComponent,
    dateFormatPipe,
    CurrencyFormatPipe,
    TableDocumentsComponent,
    StepsComponent,
    PlaceAutocompleteDirective
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    ReactiveFormsModule,
    IconsProviderModule
  ],
  exports: [
    NgZorroModule,
    IconsProviderModule,
    dateFormatPipe,
    CurrencyFormatPipe,
    InputSearchComponent,
    TableDocumentsComponent,
    StepsComponent,
    PlaceAutocompleteDirective
  ],
  providers: [CurrencyFormatPipe]
})
export class SharedModule { }
