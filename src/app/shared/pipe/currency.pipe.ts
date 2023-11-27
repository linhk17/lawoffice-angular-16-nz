import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatPipe',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = 'VND',
    locale: string = 'de-DE'
  ): string | null {
    return formatCurrency(
      value,
      locale, 
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
    );
  }
}
