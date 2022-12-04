import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as dayjs from 'dayjs';

export class DateValidators {
  static minimum(date: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null) {
        return null;
      }

      const controlDate = dayjs(control.value);
      const minimumDate = dayjs(date);

      if (!controlDate.isValid()) {
        return null;
      }

      return minimumDate.isBefore(controlDate)
        ? null
        : {
            minimumDate: 'La date fournise est inférieure à la date minimum.',
          };
    };
  }

  static maximum(date: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null) {
        return null;
      }

      const controlDate = dayjs(control.value);
      const maximumDate = dayjs(date);

      if (!controlDate.isValid()) {
        return null;
      }

      return maximumDate.isAfter(controlDate)
        ? null
        : { maximumDate: 'La date fournise est supérieur à la date maximum.' };
    };
  }
}
