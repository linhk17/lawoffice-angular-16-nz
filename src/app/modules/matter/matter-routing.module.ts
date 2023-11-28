import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageMatterComponent } from './manage-matter/manage-matter.component';
import { MatterFormComponent } from './matter-form/matter-form.component';
import { MatterDetailComponent } from './matter-detail/matter-detail.component';
const routes: Routes = [
      {
        path: '',
        component: ManageMatterComponent,
      },
      {
        path: 'add',
        component: MatterFormComponent,
      },
      {
        path: ':id',
        component: MatterDetailComponent,
      }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatterRoutingModule {}
