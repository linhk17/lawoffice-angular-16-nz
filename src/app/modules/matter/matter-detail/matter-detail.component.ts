import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MatterService } from 'src/app/services/matter.service';
import { UserService } from 'src/app/services/user.service';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-matter-detail',
  templateUrl: './matter-detail.component.html',
  styleUrls: ['./matter-detail.component.scss']
})
export class MatterDetailComponent {
  matter: any;
  userAccess: any;
  edit: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private matterService: MatterService,
    private userService: UserService,
    private router: Router,
    private modal: NzModalService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.matterService
        .getById(param['id'])
        .pipe()
        .subscribe((res: any) => {
          this.matter = res;
          this.matter.status != 0 ? this.edit = false : this.edit = true
          this.userService.getByMatter(
            res.truy_cap.khach_hang.concat(res.truy_cap.nhan_vien)
          ).subscribe(res => {
            this.userAccess = res;
            console.log(this.matter.tai_lieu); 
          })
        });
    });
  }
  updateMatter(event: any){
    this.matterService.update(this.matter._id, {...this.matter, ...event})
    .subscribe(res => {
      this.matter = res;
      this.message.success('Cập nhật thành công')
    })    
  }

  showConfirm(mess: string, status: number): void {
    this.modal.confirm({
      nzTitle: `<i>${mess}</i>`,
      nzContent: 
      '<b>Bạn sẽ không thể tiếp tục chỉnh sửa nếu vụ việc đã hoàn thành, hãy cân nhắc thật kỹ</b>',
      nzOnOk: () => {
        this.matterService.update(this.matter._id, {...this.matter, status: status})
        .subscribe(res => this.matter = res) 
        this.edit = false;
        this.matterService.setStatusTask(this.matter._id, {status: status}).subscribe(res => {
          this.router.navigate(['/law/manage-matter/'])
        })
      }
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Xác nhận tạm ngưng vụ việc?',
      nzContent: 
      '<b style="color: red;">Bạn sẽ không thể tiếp tục chỉnh sửa nếu vụ việc này tạm ngưng, hãy cân nhắc thật kỹ</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.matterService.update(this.matter._id, {...this.matter, status: 2})
        .subscribe(res => this.matter = res) 
        this.edit = false;
        this.matterService.setStatusTask(this.matter._id, {status: 2})
        .subscribe(res => 
            this.router.navigate(['/law/manage-matter/'])
      )
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
