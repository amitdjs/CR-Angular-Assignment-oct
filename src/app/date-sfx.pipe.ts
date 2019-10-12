import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSfx'
})
export class DateSfxPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      let dateWithoutSfx:Date = new Date(value);
      let dateWithoutSfxStr:string = value;

      console.log(dateWithoutSfxStr);
      let dateWithSfx:string = this.getSuffixByDate(dateWithoutSfx.getDate());

      return (dateWithSfx + " " + dateWithoutSfxStr.split(" ")[1] + " " + dateWithoutSfxStr.split(" ")[2]);
    }
  }

  getSuffixByDate(date: number) {
    switch(date % 10) {
      case 1:
        return date + "st";
      case 2:
        return date + "nd";
      case 3:
        return date + "rd";
      default:
        return date + "th";
    }
  }

}
