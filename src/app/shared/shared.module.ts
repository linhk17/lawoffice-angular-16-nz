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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './component/modal-confirm/modal-confirm.component';
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { ProgressStatusComponent } from './component/progress-status/progress-status.component';

@NgModule({
  declarations: [
    InputSearchComponent,
    dateFormatPipe,
    CurrencyFormatPipe,
    TableDocumentsComponent,
    StepsComponent,
    PlaceAutocompleteDirective,
    ModalConfirmComponent,
    UploadImageComponent,
    ProgressStatusComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    FormsModule,
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
    PlaceAutocompleteDirective,
    ModalConfirmComponent,
    UploadImageComponent,
    ProgressStatusComponent
  ],
  providers: [CurrencyFormatPipe]
})
export class SharedModule { }
