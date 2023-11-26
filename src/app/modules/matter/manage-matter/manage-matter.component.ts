import { Component } from '@angular/core';
import { MatterService } from 'src/app/services/matter.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-manage-matter',
  templateUrl: './manage-matter.component.html',
  styleUrls: ['./manage-matter.component.scss'],
})
export class ManageMatterComponent {
  dataSource: any;
  user: any;
  constructor(
    private matterService: MatterService,
    private storage: StorageService
  ) {}
  ngOnInit(): void {
    this.user = this.storage.getUser();

    if (this.user.role == 1) {
      this.matterService
        .getAll()
        .pipe()
        .subscribe((res) => {
          this.dataSource = res.map((item: any) => {
            return {
              ...item,
              process: item.quy_trinh
                ? Math.floor(
                    (item.quy_trinh.filter((i: any) => i.status > 0).length /
                      item.quy_trinh.length) *
                      100
                  )
                : 0,
            };
          });
        });
    } else {
      this.matterService
        .findByIdAccess({
          id: this.user.id,
        })
        .subscribe((res) => {
          this.dataSource = res.map((item: any) => {
            return {
              ...item,
              process: item.quy_trinh
                ? Math.floor(
                    (item.quy_trinh.filter((i: any) => i.status > 0).length /
                      item.quy_trinh.length) *
                      100
                  )
                : 0,
            };
          });
        });
    }
  }
}
