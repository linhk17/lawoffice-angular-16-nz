import { Component } from '@angular/core';
import { MatterService } from 'src/app/services/matter.service';

@Component({
  selector: 'app-manage-matter',
  templateUrl: './manage-matter.component.html',
  styleUrls: ['./manage-matter.component.scss']
})
export class ManageMatterComponent {
  dataSource: any;
  constructor(private matterService: MatterService){}
  ngOnInit(): void {
    this.matterService.getAll()
    .pipe()
    .subscribe(res => {
      this.dataSource = res.map((item: any) => {
        return {
          ...item,
          process: item.quy_trinh ?
          Math.floor((((item.quy_trinh.filter((i: any) => i.status > 0))).length / item.quy_trinh.length) * 100)
          : 0
        }
      })
    }
    )
  }
}
