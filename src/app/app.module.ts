import { NgModule } from '@angular/core';
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
import { ModulesModule } from './modules/modules.module';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutsModule,
    ModulesModule
  ],
  
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard, RedirectGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
