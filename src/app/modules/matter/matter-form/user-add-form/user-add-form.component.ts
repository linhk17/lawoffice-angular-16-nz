import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/services/user.service';
import { PhoneNumberValidator } from 'src/app/shared/utils/validator';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss'],
})
export class UserAddFormComponent {
  @Input() show: boolean = false;
  @Output() isClosed = new EventEmitter();
  @Output() isAddSuccess = new EventEmitter();
  submitted: boolean = false;
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      ho_ten: ['', [Validators.required]],
      dia_chi: ['', [Validators.required]],
      ngay_sinh: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      sdt: ['', [Validators.required, PhoneNumberValidator('VN')]],
    });
  }
  get formControl(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  getErrorMessage(control: any, typeError?: String) {
    if (control.hasError('required')) {
      return 'Vui lòng nhập vào trường này';
    }
    return control.hasError(`${typeError}`) ? `Giá trị nhập không hợp lệ` : '';
  }

  setAddress(event: any){
    console.log(event);
  }

  submitForm(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService
        .create({
          ...this.userForm.value,
          account: {
            sdt: this.userForm.value.sdt,
            mat_khau: Math.floor(Math.random() * 11).toString(),
            quyen: 0,
          },
        })
        .subscribe((res) => {
          this.message.success('Thêm thành công');
          this.isClosed.emit(!this.show);
          this.isAddSuccess.emit();
        });
    }
  }
}
