import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    debugger;
    value = moment(value).format("Do MMM, YYYY");
    let date = new Date(value);
    return ;
  }

}
