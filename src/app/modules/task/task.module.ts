import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTaskComponent } from './manage-task/manage-task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';



@NgModule({
  declarations: [
    ManageTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
