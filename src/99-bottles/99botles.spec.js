describe('99 bottles', () => {
  const bottle
  it('should sing verse with arbitrary number (6)', () => {
    const verseNumber = 6;
    const verse =
      '6 bottles of beer on the wall, 6 bottles of beer.\n Take one down and pass it around, 5 bottles of beer on the wall.\n';
    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with another arbitrary number (10)', () => {
    const verseNumber = 10;
    const verse =
      '10 bottles of beer on the wall, 10 bottles of beer.\n Take one down and pass it around, 9 bottles of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (2)', () => {
    const verseNumber = 2;
    const verse =
      '2 bottles of beer on the wall, 2 bottles of beer.\n Take one down and pass it around, 1 bottles of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (1)', () => {
    const verseNumber = 1;
    const verse =
      '1 bottles of beer on the wall, 1 bottles of beer.\n Take one down and pass it around, no more bottles of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (0)', () => {
    const verseNumber = 0;
    const verse =
      'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });

  it('should return array of descendent numbers', () => {
    const from = 8;
    const to = 6 ;
    const expectedRange = [10,9,8,7,6]
    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
});
