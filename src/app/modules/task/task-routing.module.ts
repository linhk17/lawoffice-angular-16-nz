import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageTaskComponent } from './manage-task/manage-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ManageTaskComponent,
  },
  {
    path: ':id',
    component: TaskDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
