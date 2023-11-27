import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'app-matter-tasks',
  templateUrl: './matter-tasks.component.html',
  styleUrls: ['./matter-tasks.component.scss'],
})
export class MatterTasksComponent {
  @Input() id: string = '';
  @Input() access: any;
  @Input() edit: boolean = false;
  tasks: any = [];
  isVisible = false;
  userAccess: any = [];
  user: any;
  taskForm: FormGroup<{
    ten_cong_viec: FormControl<string>;
    nguoi_phu_trach: FormControl<string>;
    han_chot_cong_viec: FormControl<string>;
    mo_ta_cong_viec: FormControl<string>;
    yeu_cau_cong_viec: FormControl<string>;
  }>;
  disabledDate = (current: Date): boolean =>
    differenceInCalendarDays(new Date(), current) > 0;
  constructor(
    private fb: NonNullableFormBuilder,
    private userService: UserService,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      ten_cong_viec: ['', [Validators.required]],
      nguoi_phu_trach: ['', [Validators.required]],
      han_chot_cong_viec: ['', [Validators.required]],
      mo_ta_cong_viec: ['', [Validators.required]],
      yeu_cau_cong_viec: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.userService.getByMatter(this.access).subscribe((res) => {
      this.userAccess = res;
    });
    this.getTasks();
    this.getUser();
  }
  getTasks() {
    this.taskService
      .getByMatter(this.id)
      .subscribe((res) => (this.tasks = res));
  }
  getUser() {
    this.userService
      .getProfileUser()
      .pipe()
      .subscribe((res) => (this.user = res));
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  submitForm(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.taskService
        .create({
          ...this.taskForm.value,
          nguoi_phan_cong: this.user._id,
          status: 0,
          vu_viec: this.id,
        })
        .subscribe((res) => {
          this.getTasks();
          this.handleCancel();
        });
    } else {
      Object.values(this.taskForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
