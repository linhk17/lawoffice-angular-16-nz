import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { NgZorroModule } from './ngzorro/ngzorro.module';
import { IconsProviderModule } from './ngzorro/icons-provider.module';
import { MessageComponent } from './component/message/message.component';
import { dateFormatPipe } from './pipe/date.pipe';
import { CurrencyFormatPipe } from './pipe/currency.pipe';

@NgModule({
  declarations: [
    InputSearchComponent,
    MessageComponent,
    dateFormatPipe,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    IconsProviderModule
  ],
  exports: [
    NgZorroModule,
    IconsProviderModule,
    InputSearchComponent,
    dateFormatPipe,
    CurrencyFormatPipe
  ],
  providers: [CurrencyFormatPipe]
})
export class SharedModule { }
