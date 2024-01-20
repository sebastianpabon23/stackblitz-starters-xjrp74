import { PasswordVerifier } from './passwordVerifier';

describe('Password verifier', () => {
  const passVerifier = new PasswordVerifier();

  it('should throw error if the password is null', () => {
    const password = null;
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should not be null'));
  });

  it('should throw error if the password is too short', () => {
    const password = 'abc';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should have more than 8 characters'));
  });

  it('should throw error if the password does not have at least one lowercase letter', () => {
    const password = 'ABCDEFGHIJ';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should have one lowercase letter at least'));
  });

  it('should throw error if the password does not have at least one uppercase letter', () => {
    const password = 'abcdefghij';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should have one uppercase letter at least'));
  });

  it('should throw error if the password does not have at least one number', () => {
    const password = 'AbcdEfghij';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should have one number at least'));
  });

  it('should return "Password correct" if all verifications pass', () => {
    const password = 'AbcdEfgh21';
    expect(passVerifier.verify(password)).toBe('Password correct');
  });

  it('should return "Password correct" if at least 3 conditions are met', () => {
    const password = 'Abcde1234'; // Meets length, lowercase, uppercase, and numeric conditions
    expect(passVerifier.verify(password)).toBe('Password correct');
  });

  it('should throw an error if less than 3 conditions are met', () => {
    const password = 'ABCD1234'; // Meets length, uppercase, and numeric, but not lowercase
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(new Error('password should meet at least 3 of the criteria'));
  });
});
