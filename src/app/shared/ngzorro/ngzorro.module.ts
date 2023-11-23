import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzStepsModule } from 'ng-zorro-antd/steps';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzInputModule,
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzDropDownModule,
    NzAvatarModule,
    NzSpaceModule,
    NzTypographyModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzTagModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzStepsModule
  ]
})
export class NgZorroModule { }
