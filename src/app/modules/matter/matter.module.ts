import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMatterComponent } from './manage-matter/manage-matter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatterDetailComponent } from './matter-detail/matter-detail.component';
import { MatterContactsComponent } from './matter-contacts/matter-contacts.component';
import { MatterTasksComponent } from './matter-tasks/matter-tasks.component';
import { MatterStepsComponent } from './matter-steps/matter-steps.component';
import { MatterFeesComponent } from './matter-fees/matter-fees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatterRoutingModule } from './matter-routing.module';
import { MatterFormModule } from './matter-form/matter-form.module';


@NgModule({
  declarations: [
    ManageMatterComponent,
    MatterDetailComponent,
    MatterContactsComponent,
    MatterTasksComponent,
    MatterStepsComponent,
    MatterFeesComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatterRoutingModule,
    SharedModule,
    MatterFormModule
  ]
})
export class MatterModule { }
