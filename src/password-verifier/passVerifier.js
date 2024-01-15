export class PasswordVerifier {
  verify(text) {
    this.#nullValidation(text);
    this.#lengthValidation(text);
    this.#uppercaseValidation(text);
    this.#lowercaseValidation(text);
    this.#numericValidation(text);
    return 'Correct password';
  }

  #nullValidation(text) {
    if (!text) {
      throw Error('password should not be null');
    }
  }

  #lengthValidation(text) {
    if (text.length <= 8) {
      throw Error('password should be large than 8 chars');
    }
  }

  #uppercaseValidation(text) {
    if (!/[A-Z]/.test(text)) {
      throw Error('password should have one uppercase letter at least');
    }
  }

  #lowercaseValidation(text) {
    if (!/[a-z]/.test(text)) {
      throw Error('password should have one lowercase letter at least');
    }
  }

  #numericValidation(text) {
    if (!/[0-9]/.test(text)) {
      throw Error('password should have one number at least');
    }
  }
}
