export class PasswordVerifier {
  verify(text) {
    let validConditions = 0;

    validConditions = this.#nullValidation(text, validConditions);
    validConditions = this.#lengthValidation(text, validConditions);
    validConditions = this.#uppercaseValidation(text, validConditions);
    validConditions = this.#lowercaseValidation(text, validConditions);
    validConditions = this.#numericValidation(text, validConditions);

    if (validConditions < 3) {
      throw new Error('password should meet at least 3 of the criteria');
    }
    return 'Password correct';
  }

  #nullValidation(text, validConditions) {
    if (!text) {
      throw new Error('password should not be null');
    }
    return validConditions + 1;
  }

  #lengthValidation(text, validConditions) {
    if (text.length <= 8) {
      throw new Error('password should have more than 8 characters');
    }
    return validConditions + 1;
  }

  #uppercaseValidation(text, validConditions) {
    if (!/[A-Z]/.test(text)) {
      throw new Error('password should have one uppercase letter at least');
    }
    return validConditions + 1;
  }

  #lowercaseValidation(text, validConditions) {
    if (!/[a-z]/.test(text)) {
      throw new Error('password should have one lowercase letter at least');
    }
    return validConditions + 1;
  }

  #numericValidation(text, validConditions) {
    if (!/[0-9]/.test(text)) {
      throw new Error('password should have one number at least');
    }
    return validConditions + 1;
  }
}
