import { AbstractControl, ValidatorFn } from "@angular/forms";
import {parsePhoneNumber, isValidPhoneNumber} from 'libphonenumber-js'

export let numberFormat: string = '';
export function PhoneNumberValidator(regionCode: any): ValidatorFn {
  let phoneNumber: any;
  return (control: AbstractControl) => {
    let validNumber = false;
    try {
      phoneNumber = parsePhoneNumber(control.value, regionCode).formatNational();
      numberFormat = phoneNumber;
      validNumber = isValidPhoneNumber(control.value, regionCode)
    } catch (e) { }

    return validNumber ? null :  phoneNumber;
  }
}




