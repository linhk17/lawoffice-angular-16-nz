import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatterFormComponent } from './matter-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';


@NgModule({
  declarations: [
    MatterFormComponent,
    UserAddFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MatterFormModule { }
