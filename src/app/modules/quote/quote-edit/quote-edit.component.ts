import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { ServiceService } from 'src/app/services/service.service';
import { TimePayService } from 'src/app/services/time-pay.service';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { UserService } from 'src/app/services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.scss']
})
export class QuoteEditComponent {
  quote?: any;
  created: string = '';
  types: any;
  services: any = [];
  timePay: any;
  user: any;
  updateForm: FormGroup = new FormGroup({
    linh_vuc: new FormControl(''),
    dich_vu: new FormControl(''),
    dieu_khoan_thanh_toan: new FormControl(''),
    ghi_chu: new FormControl(''),
    tong_gia_du_kien: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quoteService: QuoteService,
    private typeService: TypeServiceService,
    private service: ServiceService,
    private formBuilder: FormBuilder,
    private timePayService: TimePayService,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.quoteService
        .getById(param['id'])
        .pipe()
        .subscribe((res) => {
          this.quote = res;
          this.getService(res.linh_vuc._id);
          this.created = res.ngay_gui_phieu;
          this.updateForm = this.formBuilder.group({
            linh_vuc: [
              res.linh_vuc._id,
              [Validators.required],
            ],
            dich_vu: ['0', [Validators.required]],
            dieu_khoan_thanh_toan: ['0', [Validators.required]],
            ghi_chu: ['', [Validators.required]],
            tong_gia_du_kien: ['0', [Validators.required]],
          });
        });
    });
    this.getType();
    this.getTimePay();
    this.getUser()
  }
  createMessage(type: string, mess: string): void {
    this.message.create(type, mess);
  }
  getType() {
    this.typeService
      .getAllType()
      .pipe()
      .subscribe((res) => {
        this.types = res;
      });
  }

  getTimePay() {
    this.timePayService.getAll().pipe()
    .subscribe(res => this.timePay = res)
  }

  getService(id: any) {
    this.service
      .getByType(id)
      .pipe()
      .subscribe((res) => (this.services = res));
  }

  getUser(){
    this.userService.getProfileUser()
    .pipe()
    .subscribe(res => this.user = res)
  }

  setPrice(id: string){
    const s = this.services.filter((item: any) => item._id == id);
    this.updateForm.controls['tong_gia_du_kien'].setValue(s[0].don_gia_dv)
  }
  onSubmit() {
    const data = {
      ...this.quote,
      ...this.updateForm.value,
      nguoi_lap_phieu: this.user,
      status: 1
    }
    
    this.quoteService.update(data, this.quote._id)
    .pipe()
    .subscribe(res => {
      this.createMessage('success', 'Tạo báo giá thành công');
      this.router.navigate(['/counselor/manage-quote/', res._id])
    } 
    )
  }

}
