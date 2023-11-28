import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMatterComponent } from './manage-matter/manage-matter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatterDetailComponent } from './matter-detail/matter-detail.component';
import { MatterDocumentsComponent } from './matter-documents/matter-documents.component';
import { MatterContactsComponent } from './matter-contacts/matter-contacts.component';
import { MatterTasksComponent } from './matter-tasks/matter-tasks.component';
import { MatterStepsComponent } from './matter-steps/matter-steps.component';
import { MatterFeesComponent } from './matter-fees/matter-fees.component';
import { MatterFormComponent } from './matter-form/matter-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatterRoutingModule } from './matter-routing.module';



@NgModule({
  declarations: [
    ManageMatterComponent,
    MatterDetailComponent,
    MatterDocumentsComponent,
    MatterContactsComponent,
    MatterTasksComponent,
    MatterStepsComponent,
    MatterFeesComponent,
    MatterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatterRoutingModule,
    // AppRoutingModule,
    SharedModule,
  ]
})
export class MatterModule { }
