import { FormControl, Validators } from '@angular/forms';

export class CustomValidators extends Validators {
  
  static validateNumeric(control: FormControl) {
    const numeric = new RegExp(/^[0-9]*$/);
    if (control.value && control.value.length > 0) {
      const invalid = !numeric.test(control.value) ||  (parseInt(control.value) <= 0 || parseInt(control.value) > 10);
      return invalid ? { invalid: invalid } : null;
    } else {
      return null;
    }
  }
}