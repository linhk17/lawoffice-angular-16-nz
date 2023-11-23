import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  ContactsOutline,
  ArrowRightOutline
} from '@ant-design/icons-angular/icons';

const icons = [ArrowRightOutline, MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, ContactsOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
