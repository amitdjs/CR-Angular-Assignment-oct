import { AbstractControl } from "@angular/forms";

export function RatingValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /[0-9]{0-10}/.test(control.value);
  return valid
    ? null
    : { invalidRating: { valid: false, value: control.value } };
}
