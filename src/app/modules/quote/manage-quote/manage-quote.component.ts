import { Component } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-manage-quote',
  templateUrl: './manage-quote.component.html',
  styleUrls: ['./manage-quote.component.scss']
})
export class ManageQuoteComponent {
  dataSource: any = []
  constructor(
    private quoteService: QuoteService
  ){}

  ngOnInit(){
    this.getAllQuote()
  }

  getAllQuote(){
    this.quoteService.getAll()
    .pipe()
    .subscribe((res: any) => {

      this.dataSource = res.map(( item: any, key: number) => {
        return {
          stt: key + 1,
          id: item._id,
          name: item.khach_hang.ho_ten,
          email: item.khach_hang.email,
          phone: item.khach_hang.sdt,
          created: item.ngay_gui_phieu,
          status: item.status
        }
      }
      )
    })
  }
}
