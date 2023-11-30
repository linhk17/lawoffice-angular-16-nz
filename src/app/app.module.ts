import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { RedirectGuard } from './shared/guards/redirect.guard';
import { SharedModule } from './shared/shared.module';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
registerLocaleData(en);
registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutsModule,
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
    AuthGuard,
    RedirectGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
