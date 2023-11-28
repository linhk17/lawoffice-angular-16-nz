import { AbstractControl, ValidatorFn } from "@angular/forms";
import { PhoneNumberUtil } from "google-libphonenumber";


export function PhoneNumberValidator(regionCode: string): ValidatorFn {
    var phoneNumberUtil = PhoneNumberUtil.getInstance();
    phoneNumberUtil = PhoneNumberUtil.getInstance();
    return (control: AbstractControl): { [key: string]: any } => {
      let validNumber = false;
      try {
        const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
          control.value, regionCode
        );
        validNumber = phoneNumberUtil.isValidNumberForRegion(phoneNumber, regionCode)
      } catch (e) { }
  
      return validNumber ? [] : { 'wrongNumber': { value: control.value } };
    }
  }