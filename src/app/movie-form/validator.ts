import { FormControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    static checkRatingsLength(): ValidatorFn {
      return (control: FormControl): { [key: string]: boolean } | null => {
        const val: string = control.value;
        if (control.pristine) {
          return null;
        }
        if (parseInt(val) > 10 || parseInt(val) < 0) {
          return null;
        }
        return { 'checkRatingsLength': true };
      };
    }
}
