import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validateForm: FormGroup<{
    phone: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  }); 
  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private storage: StorageService,
    private router: Router
  ){}

  submitForm(): void {
    if (this.validateForm.valid) {
      const account = {
        phone: this.validateForm.value.phone,
        password: this.validateForm.value.password,
      };
        this.authService.login(account)
        .subscribe((res: any) => {
          this.storage.setAccessToken(res.accessToken);
          this.storage.setUser(res.dataForAccessToken);
          this.router.navigate(['redirect'])
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
