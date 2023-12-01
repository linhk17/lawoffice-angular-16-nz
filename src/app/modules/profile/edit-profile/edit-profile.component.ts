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
  public user: any;
  submitted: boolean = false;
  profileForm: FormGroup;
  avatar: any;
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

  getErrorMessage(control: any, typeError?: String) {
    if (control.hasError('required')) {
      return 'Vui lòng nhập vào trường này';
    }
    return control.hasError(`${typeError}`) ? `Giá trị nhập không hợp lệ` : '';
  }
  submitForm(): void {
    this.submitted = true;
    // console.log(this.avatar);
        
    if (this.profileForm.valid) {
      const data = {
        ...this.user,
          ...this.profileForm.value,
          avatar: this.avatar,
      }
      console.log(data);
      
      this.userService.updateUser(data);
      this.message.success('Chỉnh sửa thành công');
      // this.router.navigate(['/law/manage-profile']);
    }
  }
}
