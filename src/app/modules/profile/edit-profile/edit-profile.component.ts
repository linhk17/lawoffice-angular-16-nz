import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  public user: any = {};
  submitted: boolean = false;
  profileForm: FormGroup = new FormGroup({
    ho_ten: new FormControl(''),
    dia_chi: new FormControl(''),
    email: new FormControl(''),
    ngay_sinh: new FormControl(''),
    part: new FormControl(''),
    position: new FormControl(''),
  });
  constructor(
    private userService: UserService,
    private storage: StorageService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getProfileUser();
    this.userService.currentUser.subscribe((res) => {
      this.profileForm = this.fb.group({
        ho_ten: [res?.ho_ten],
        dia_chi: [res?.dia_chi],
        email: [res?.email, [Validators.email]],
        ngay_sinh: [res?.ngay_sinh],
        part: [{ value: res?.bo_phan?.ten_bo_phan, disabled: true }],
        position: [{ value: res?.chuc_vu?.ten_chuc_vu, disabled: true }],
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
  
  createMessage(type: string, mess: string): void {
    this.message.create(type, mess);
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
      this.createMessage('success', 'Chỉnh sửa thành công');
      this.router.navigate(['/law/manage-profile'])
    }
  }
}
