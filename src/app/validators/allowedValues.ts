import { AbstractControl, ValidatorFn } from '@angular/forms';

export function allowedValues(values: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return values.includes(control.value)
      ? null
      : { wrongContinent: control.value };
  };
}
