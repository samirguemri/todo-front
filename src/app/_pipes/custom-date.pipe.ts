import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  transform(date: Date): string {
    return formatDate(date, 'yyyy-MM-ddThh:mm', this.locale);
  }

}
