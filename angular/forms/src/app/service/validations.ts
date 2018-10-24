import { AbstractControl } from '@angular/forms';

export function validateNameField (regExp:RegExp) {
    let control:AbstractControl;
    
    // return regExp.test(control.value)
    return control.value;
    // control.setValidators(regExp);
}