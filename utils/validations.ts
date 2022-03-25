export interface validationResult {
  isValid: boolean,
  errors: string[]
}

export class ContactFormValidator {
  static getValidationResult(key: string, value: string, validations: ((value: string) => string)[]): validationResult {
    const errors: string[] = [];
    validations.map(validation => {
      const errorMessage = validation(value);
      if (errorMessage.length > 0) errors.push(`${key} ${errorMessage}`);
    });
    const isValid = errors.length > 0;
    return {
      isValid: isValid,
      errors: errors
    }
  }

  static presence(value: string): string {
     if(value.length > 0){
       return '';
     }else{
       return "must be given.";
     }
  }

  static emailFormat(value: string): string {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(value) ? '' : 'has invalid format.';
  }
}