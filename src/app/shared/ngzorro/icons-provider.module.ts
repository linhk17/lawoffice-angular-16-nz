import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  ContactsOutline,
  ArrowRightOutline,
  ProfileOutline,
  SettingOutline,
  LoginOutline,
  DeleteFill,
  EditOutline,
  MacCommandOutline,
  TeamOutline,
  ExportOutline,
  FormatPainterOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  LoginOutline, 
  SettingOutline, 
  ProfileOutline, 
  ArrowRightOutline, 
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  DashboardOutline, 
  FormOutline, 
  ContactsOutline,
  DeleteFill,
  EditOutline,
  MacCommandOutline,
  TeamOutline,
  ExportOutline,
  FormatPainterOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
