import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PartService } from 'src/app/services/part.service';
import { TimeAppointmentService } from 'src/app/services/time-appointment.service';
import { TypeAppointmentService } from 'src/app/services/type-appointment.service';
import { UserService } from 'src/app/services/user.service';
import { Part } from 'src/app/shared/models/position.interface';
import { TypeAppointment } from 'src/app/shared/models/time-appointment.interface';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-modal-add-calendar',
  templateUrl: './modal-add-calendar.component.html',
  styleUrls: ['./modal-add-calendar.component.scss'],
})
export class ModalAddCalendarComponent {
  @Input() isVisible = false;
  @Input() data: any;
  @Output() isCloseModal = new EventEmitter();
  typeAppoints: TypeAppointment[] | any = [];
  parts: Part[] | any = [];
  users: User[] | any = [];
  user?: any;

  timeAppointForm: FormGroup<{
    tieu_de: FormControl<string>,
    loai_lich: FormControl<string>,
    mo_ta: FormControl<string>,
    start: FormControl<string>,
    end: FormControl<string>,
    bo_phan: FormControl<string>,
    nhan_vien: FormControl<string>,
    ghi_chu: FormControl<string>,
  }>
  constructor(
    private typeAppointMentService: TypeAppointmentService,
    private partService: PartService,
    private userService: UserService,
    private timeApointmentService: TimeAppointmentService,
    private nzMessageService: NzMessageService,
    private fb: NonNullableFormBuilder
  ) {
    this.timeAppointForm = this.fb.group({
      tieu_de: ['', [Validators.required]],
      loai_lich: ['', [Validators.required]],
      mo_ta: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      bo_phan: ['', [Validators.required]],
      nhan_vien: ['', [Validators.required]],
      ghi_chu: [''],
    });
  }

  ngOnInit() {
    this.getTypeAppoint();
    this.getAllPart();
    this.getUser();
  }

  disabledDate = (current: Date): boolean =>
    differenceInCalendarDays(new Date(), current) > 0;

  handleCancel(): void {
    this.isVisible = false;
    this.isCloseModal.emit(this.isVisible);
  }
  getTypeAppoint() {
    this.typeAppointMentService
      .getAllType()
      .pipe()
      .subscribe((res) => (this.typeAppoints = res));
  }
  getAllPart() {
    this.partService
      .getAll()
      .pipe()
      .subscribe((res) => (this.parts = res));
  }
  setEmployee(id: any) {
    console.log(id);

    this.userService
      .getAllUser()
      .pipe()
      .subscribe((res: any) => {
        this.users = res.filter((item: any) => item.bo_phan._id == id);
      });
  }
  getUser() {
    this.userService
      .getProfileUser()
      .pipe()
      .subscribe((res) => (this.user = res));
  }
  onSubmit() {

    if (!this.timeAppointForm.invalid) {
      const dataForm = {
        ...this.timeAppointForm.value,
        thoi_gian: {
          start: this.timeAppointForm.value.start,
          end: this.timeAppointForm.value.end,
        },
        khach_hang: {
          ho_ten: this.data.khach_hang.ho_ten,
          sdt: this.data.khach_hang.sdt,
          email: this.data.khach_hang.email,
        },
        phieu_bao_gia: this.data._id,
        nguoi_tao: this.user?._id,
      };
      this.timeApointmentService
        .create(dataForm)
        .pipe()
        .subscribe((res) => {
          this.nzMessageService.success('Tạo lịch thành công');
          this.handleCancel();
        });
    }
    else {
      Object.values(this.timeAppointForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
