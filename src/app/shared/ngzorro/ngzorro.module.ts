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
    NzSelectModule
  ]
})
export class NgZorroModule { }
