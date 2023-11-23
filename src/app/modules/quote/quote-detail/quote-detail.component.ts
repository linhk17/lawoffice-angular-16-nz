import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/shared/models/quote.interface';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent {
  quote?: any;
  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private router: Router
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

}
