export class PasswordVerifier {
  verify(text) {
    if (!text) {
      throw Error('password should not be null');
    }
    if (text.length <= 8) {
      throw Error('password should be large than 8 chars');
    }
    if (!/[A-Z]/.test(text)) {
      throw Error('password should have one uppercase letter at least');
    }
    if (!/[a-z]/.test(text)) {
      throw Error('password should have one lowercase letter at least');
    }
    if (!/[0-9]/.test(text)) {
      throw Error('password should have one number at least');
    }
    return 'Correct password';
  }
  
}
