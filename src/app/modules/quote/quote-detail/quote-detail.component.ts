import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuoteService } from 'src/app/services/quote.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss'],
})
export class QuoteDetailComponent {
  quote?: any;
  isShowModal: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private router: Router,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.quoteService
        .getById(param['id'])
        .pipe()
        .subscribe((res: any) => {
          this.quote = res;
        });
    });
  }
  confirm(): void {
    this.nzMessageService.success('Gửi email thành công');
  }
  beforeConfirm(): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();

      }, 3000);
    });
  }
  sendEMail() {
    this.quoteService.sendMail(this.quote).subscribe((res) => 
    this.nzMessageService.success('Gửi email thành công')
    );
  }
}
