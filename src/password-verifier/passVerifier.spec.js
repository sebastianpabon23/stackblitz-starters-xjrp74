describe('Password verifier', () => {
  const passVerifier = new PasswordVerifier();
  it('should throw error if the password does not have more than 8 characters', () => {
    const password = 'abcdefg';
    expect(() => {
      passVerifier.verify(password);
    }).toThrow(Error('password should have one number at least'));
  });
  it('should return "Correct password" if pass all verifications', () => {
    const password = 'AbcdEfgh21';
    expect(() => {
      passVerifier.verify(password);
    })not.toThrow(Error('password should have one number at least'));
  });
});
