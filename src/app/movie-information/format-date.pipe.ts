import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any): any {
    let monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"];
    let date = new Date(value);
    return date.getDate() + this.getStrForDate(date.getDate()) + monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  getStrForDate(day) {
    if(day == 1) {
      return 'st '
    } else if(day == 2) {
      return 'nd ';
    } else if(day == 3) {
      return 'rd '
    } else {
      return 'th '
    }
  }

}
