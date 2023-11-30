import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  public user: any = {};
  submitted: boolean = false;
  profileForm: FormGroup;
  constructor(
    private userService: UserService,
    private storage: StorageService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      ho_ten: [''],
      dia_chi: [''],
      ngay_sinh: [''],
      email: ['', [Validators.email]],
      part: [{ value: '', disabled: true }],
      position: [{ value: '', disabled: true }],
    });
  }

  ngOnInit() {
    this.userService.getProfileUser();
    this.userService.currentUser.subscribe((res) => {
      this.profileForm.patchValue({
        ...res,
        part: res?.bo_phan?.ten_bo_phan,
        position: res?.chuc_vu?.ten_chuc_vu,
      });
      this.user = res;
    });
  }
  get formControl(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  getBase64(file: File) {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  getErrorMessage(control: any, typeError?: String) {
    if (control.hasError('required')) {
      return 'Vui lòng nhập vào trường này';
    }
    return control.hasError(`${typeError}`) ? `Giá trị nhập không hợp lệ` : '';
  }
  submitForm(): void {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.userService.updateUser({
        ...this.user,
        ...this.profileForm.value,
      });
      this.message.success('Chỉnh sửa thành công');
      this.router.navigate(['/law/manage-profile']);
    }
  }
}
