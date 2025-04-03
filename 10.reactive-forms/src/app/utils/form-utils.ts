import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
export class FormUtils {
  static namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static isErrorField(form: FormGroup, field: string) {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getMessageError(form: FormGroup, field: string) {
    if (!form.controls[field]) return null;

    const errors = form.controls[field].errors ?? {};

    return FormUtils.dynamicMessageSwitch(errors);
  }

  static getMessageErrorArrayField(formArray: FormArray, index: number) {
    if (!formArray.controls[index]) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtils.dynamicMessageSwitch(errors);
  }

  static isValidArrayField(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static dynamicMessageSwitch(errors: ValidationErrors) {
    for (const key in errors) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'minlength':
          return `Mìnimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mìnimo de ${errors['min'].min}`;
        case 'pattern':
          const errorPattern = errors['pattern'].requiredPattern;
          if (errorPattern === FormUtils.emailPattern) {
            return 'El email no tiene el formato adecuado'
          } else if (errorPattern === FormUtils.namePattern) {
            return 'El campo debe contener un espacio'
          } else if (errorPattern === FormUtils.notOnlySpacesPattern) {
            return 'El campo no debe contener espacios'
          }
          break;
        case 'emailUsed':
          return 'El email ya está usado'
        case 'existUsername':
          return 'Ese nombre de usuario ya se encuentra registrado'
      }
    }

    return null;
  }

  static isFieldEqualsFormError(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      if (field1Value !== field2Value) return { notEqual: true };
      return null;
    };
  }

  static sleep() {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver(console.log('Send request server'));
      }, 3000);
    })
  }

  static async asyncEmailValidatorServer(formControl: AbstractControl) {

    const field = formControl.value;

    await FormUtils.sleep();

    if (field === "carlos@gmail.com") {
      return {
        emailUsed: true,
      }
    }
    return null
  } 

  static validateSpecificUsername(formControl: AbstractControl) {
    const fieldValue = formControl.value

    if (fieldValue === "carlito") {
      return {
        existUsername: true,
      }
    }

    return null
  }
  
}
