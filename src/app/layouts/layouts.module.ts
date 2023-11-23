import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { MainLayoutComponent } from './user-layout/main-layout/main-layout.component';
import { ManageLayoutComponent } from './manage-layout/manage-layout.component';



@NgModule({
  declarations: [
    UserHeaderComponent,
    MainLayoutComponent,
    ManageLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class LayoutsModule { }
