import { Component } from '@angular/core';
import { MatterService } from 'src/app/services/matter.service';
import { StorageService } from 'src/app/services/storage.service';
import { ColumnItem } from 'src/app/shared/models/table.interface';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-manage-matter',
  templateUrl: './manage-matter.component.html',
  styleUrls: ['./manage-matter.component.scss'],
})
export class ManageMatterComponent {
  user: any;
  searchValue = '';
  arrTypeService: any = [];
  arrServices: any = [];

  visible = false;
  visibleLaw = false;
  visibleCustomer = false;
  visiblePhone = false;

  dataSource: any;
  dataDisplay: any;
  constructor(
    private matterService: MatterService,
    private storage: StorageService,
    private typeService: TypeServiceService,
    private service: ServiceService
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
          this.dataDisplay = [...this.dataSource];
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
          this.dataDisplay = [...this.dataSource];
        });
    }

    this.getAllType();
    this.getAllService();
  }
  getAllType() {
    this.typeService.getAllType().subscribe((res) => {
      this.arrTypeService = res.map((item: any) => {
        return {
          text: item.ten_linh_vuc,
          value: item.ten_linh_vuc,
        };
      });
    });
  }

  getAllService() {
    this.service.getAllService().subscribe((res) => {
      this.arrServices = res.map((item: any) => {
        return {
          text: item.ten_dv,
          value: item.ten_dv,
        };
      });
    });
  }
  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }
  reset(): void {
    this.searchValue = '';
    this.dataDisplay = [...this.dataSource];
  }
  typeFilterFn = (list: string[], item: any): boolean =>
    list.some((name) => item.linh_vuc.ten_linh_vuc.indexOf(name) !== -1);

  serviceFilterFn = (list: string[], item: any): boolean =>
    list.some((name) => item.dich_vu.ten_dv.indexOf(name) !== -1);

  search(): void {
    this.dataDisplay = this.dataSource.filter(
      (item: any) => 
      this.visible ? item.ten_vu_viec.indexOf(this.searchValue) !== -1
      : this.visibleLaw ? item.luat_su.ho_ten.indexOf(this.searchValue) !== -1
      : this.visibleCustomer ? item.khach_hang.ho_ten.indexOf(this.searchValue) !== -1
      : item.khach_hang.account.sdt.indexOf(this.searchValue) !== -1
    );
  }
}
