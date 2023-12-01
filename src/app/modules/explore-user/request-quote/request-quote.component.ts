import { Component } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ProvinceService } from 'src/app/services/province.service';
import { QuoteService } from 'src/app/services/quote.service';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { District, Province } from 'src/app/shared/models/province.interface';
import { TypeService } from 'src/app/shared/models/type-service.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PhoneNumberValidator, numberFormat } from 'src/app/shared/utils/validator';
import { CountryPhoneCodeService } from 'src/app/services/country-phone-code.service';
@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss'],
})
export class RequestQuoteComponent {
  submitted: Boolean = false;
  countryCode: any;
  requestForm: FormGroup;

  provinces: Province[] = [];
  districts?: District[];
  types: TypeService[] = [];
  phoneCode: string = 'VN';
  constructor(
    private fb: NonNullableFormBuilder,
    private provinceService: ProvinceService,
    private typeService: TypeServiceService,
    private quoteService: QuoteService,
    private message: NzMessageService,
    private phoneCodeService: CountryPhoneCodeService
  ) {
    this.requestForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required, PhoneNumberValidator(this.phoneCode)]],
      province: ['', [Validators.required]],
      problem: ['', [Validators.required]],
      type: ['', [Validators.required]],
      phonePrefix: ['VN'],
    });
  }
  ngOnInit() {
    this.phoneCodeService.getPhoneCode()
    .subscribe(
      (res: any) => {
        this.countryCode = res.sort((a: any, b: any) => {
          return a.name - b.name;
        });
      }

    );
    this.provinceService.getProvinces().subscribe((res: Province[]) => {
      this.provinces = res;
    });

    this.typeService
      .getAllType()
      .pipe()
      .subscribe((res) => {
        this.types = res.map((item: any) => {
          return {
            id: item._id,
            nameType: item.ten_linh_vuc,
          };
        });
      });
  }
  setProvince(target: any) {
    this.provinceService.getDistricts('2').subscribe((res: Province) => {
      this.districts = res.districts;
    });
  }
  changeCountryCode(event: any){
    this.phoneCode = event;
    this.requestForm.controls['phone'].setValidators(PhoneNumberValidator(this.phoneCode))
  }
  setNumber(event: any){
    console.log(PhoneNumberValidator(this.phoneCode));
  }
  submitForm(): void {
    if (this.requestForm.valid) {
      this.submitted = true;
      if (!this.requestForm.invalid) {
        this.quoteService
          .create({
            khach_hang: {
              ho_ten: this.requestForm.value.fullName,
              sdt: numberFormat,
              email: this.requestForm.value.email,
            },
            linh_vuc: this.requestForm.value.type,
            van_de: this.requestForm.value.problem,
            tinh_thanh: this.requestForm.value.province,
            status: 0,
          })
          .subscribe((res) => {
            this.message.success('Gửi yêu cầu báo giá thành công');
            this.requestForm.reset();
          });
      }
    } else {
      Object.values(this.requestForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
