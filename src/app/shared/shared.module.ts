import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { NgZorroModule } from './ngzorro/ngzorro.module';
import { IconsProviderModule } from './ngzorro/icons-provider.module';



@NgModule({
  declarations: [
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    IconsProviderModule
  ],
  exports: [
    NgZorroModule,
    IconsProviderModule,
    InputSearchComponent
  ]
})
export class SharedModule { }
