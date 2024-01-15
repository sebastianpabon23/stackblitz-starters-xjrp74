import { BottleSong } from "./99botles";

describe('99 bottles', () => {
  const bottleSong = new BottleSong();

  it('should sing verse with arbitrary number (6)', () => {
    const verseNumber = 6;
    const expectedVerse =
      "6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n";
    const resultVerse = bottleSong.getVerse(verseNumber);

    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with another arbitrary number (10)', () => {
    const verseNumber = 10;
    const expectedVerse =
      "10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n";
    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (2)', () => {
    const verseNumber = 2;
    const expectedVerse =
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (1)', () => {
    const verseNumber = 1;
    const expectedVerse =
      '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });
  it('should sing verse with number (0)', () => {
    const verseNumber = 0;
    const expectedVerse =
      'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';

    const resultVerse = bottleSong.getVerse(verseNumber);
    expect(resultVerse).toBe(expectedVerse);
  });

  it('should return array of descendent numbers', () => {
    const from = 8;
    const to = 6;
    const expectedRange = [8,7,6];
    const resultRange = bottleSong.getRange(from, to);
    expect(resultRange).toEqual(expectedRange);
  });
  it('should return array of descendent numbers with other input values', () => {
    const from = 10;
    const to = 6;
    const expectedRange = [10,9,8,7,6];
    const resultRange = bottleSong.getRange(from, to);
    expect(resultRange).toEqual(expectedRange);
  });
  it('should return sing a range of the song from 8 to 6', () => {
    const from = 8;
    const to = 6;
    const expectedSong =
      '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n'
    ;
    const resultSong = bottleSong.sing(from, to);
    expect(resultSong).toEqual(expectedSong);
  });
  it('should return sing a range of the song from 13 to 12', () => {
    const from = 13;
    const to = 12;
    const expectedSong =
      '13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n'
    ;
    const resultSong = bottleSong.sing(from, to);
    expect(resultSong).toEqual(expectedSong);
  });
  it('should return sing rest of verse', () => {
    const from = 2;
    const expectedSong =
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    ;
    const resultSong = bottleSong.sing(from);
    expect(resultSong).toEqual(expectedSong);
  });
});
