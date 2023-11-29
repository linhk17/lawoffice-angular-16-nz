import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { MatterService } from 'src/app/services/matter.service';
import { ServiceService } from 'src/app/services/service.service';
import { TimePayService } from 'src/app/services/time-pay.service';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-matter-form',
  templateUrl: './matter-form.component.html',
  styleUrls: ['./matter-form.component.scss'],
})
export class MatterFormComponent {
  subscriptions: Subscription = new Subscription();
  types: any = [];
  services: any = [];
  users: any = [];
  employees: any = [];
  timePay: any = [];
  priceTotal: string | null = '';
  isVisible: boolean = false;
  matterForm: FormGroup;

  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');
  formaterPrice = (value: string | number): string => 
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parsePrice = (value: string): string => value.replace(/\$\s?|(,*)/g, '');



  constructor(
    private typeServiceService: TypeServiceService,
    private serviceService: ServiceService,
    private timePayService: TimePayService,
    private userService: UserService,
    private matterService: MatterService,
    private fb: NonNullableFormBuilder,
    private nzMessageService: NzMessageService,
    private router: Router,

  ) {
    this.matterForm = this.fb.group({
      ten_vu_viec: ['', [Validators.required]],
      linh_vuc: ['', [Validators.required]],
      dich_vu: ['', [Validators.required]],
      khach_hang: ['', [Validators.required]],
      luat_su: ['', [Validators.required]],
      chiet_khau_hoa_hong: [0, [Validators.required]],
      dieu_khoan_thanh_toan: [0, [Validators.required]],
      tong_tien: [0, [Validators.required]],
      khach_hang_access: [null, [Validators.required]],
      luat_su_access: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.getType();
    this.getAllUser();
    this.getTimePay();
  }

  getType() {
    this.subscriptions.add(
       this.typeServiceService
      .getAllType()
      .subscribe((res) => {
        this.types = res;
      })
    )
   
  }
  getTimePay() {
    this.subscriptions.add(
      this.timePayService
      .getAll()
      .subscribe((res) => (this.timePay = res))
      )
    
  }
  getService(id: any) {
    this.subscriptions.add(
      this.serviceService
      .getByType(id)
      .subscribe((res) => (this.services = res))
    )
  }
  getAllUser() {
    this.userService
      .getAllUser()
      .subscribe((res: any) => {
        this.users = res.filter((item: any) => item.account.quyen == 0);
        this.employees = res.filter((item: any) => item.account.quyen != 0);
      });
  }
  setPrice(id: any) {
    const s = this.services.filter((item: any) => item._id == id);
    this.matterForm.controls['tong_tien'].setValue(s[0].don_gia_dv)
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.matterForm.controls;
  }

  onSubmit() {
    if (!this.matterForm.invalid) {
      this.matterService.create({
        ...this.matterForm.value,
        truy_cap: {
          khach_hang: this.matterForm.value.khach_hang_access,
          nhan_vien: this.matterForm.value.luat_su_access,
        },
        status: 0
      }).subscribe(res => {
        this.nzMessageService.success('Tạo vụ việc thành công');
        this.router.navigate(['/admin/manage-matter/'])
      }
      )
    } else {
      Object.values(this.matterForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
