import { PasswordVerifier } from "./passVerifier";

describe('Password verifier', () => {
  const passVerifier = new PasswordVerifier;
  it('should throw error if the password does not have more than 8 characters', () => {
    const password = 'abcdefg';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should be large than 8 chars'));
  });
  it('should throw error if the password is null', () => {
    const password = null;
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should not be null'));
  });
  it('should throw error if the password does not have at least one uppercase letter', () => {
    const password = 'abcdefgij';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should have one uppercase letter at least'));
  });
  it('should throw error if the password does not have at least one lowercase letter', () => {
    const password = 'ABCDEFGHIJ';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should have one lowercase letter at least'));
  })
  it('should throw error if the password does not have at least one number', () => {
    const password = 'AbcdEfghij';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should have one number at least'));
  })
  it('should return "Correct password" if pass all verifications', () => {
    const password = 'AbcdEfgh21';
    expect(() => {
      passVerifier.verify(password);
    }).not.toThrowError();
    expect(passVerifier.verify(password)).toBe("Correct password");
  })
});
