import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
  transform(value: string | null) {
    var datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'dd/MM/yyyy hh:mm a');
    return value;
  }
}
