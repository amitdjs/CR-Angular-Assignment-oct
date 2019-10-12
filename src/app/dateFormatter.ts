import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateFormatter' })
 export class DateFormatterPipe implements PipeTransform {

    transform(date: string): string {
        let suffix = 'th';
        const day: string = date.substring(0, 2);
        const monthYear: string = date.substring(2, 15);

      if (day === '1' || day === '21' || day === '31') {
        suffix = 'st';
      }
      if (day === '2' || day === '22') {
        suffix = 'nd';
      }
      if (day === '3' || day === '23') {
        suffix = 'rd';
      }
        const fullDate: string = day + suffix + ' ' + monthYear;
        return fullDate;
    } 
 } 