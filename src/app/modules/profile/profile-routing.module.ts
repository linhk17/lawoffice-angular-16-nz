import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
const routes: Routes = [
  {
    path: '',
    component: ManageProfileComponent,
  },
  {
    path: 'edit',
    component: EditProfileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
