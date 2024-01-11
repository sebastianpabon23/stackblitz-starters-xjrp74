import { game } from './rockPaperScissors';

describe('Rock Paper Scissors game', () => {
  it('should get "player one wins" if players select rock and scissors', () => {
    expect(game('rock', 'scissors')).toBe('player one wins');
  });
  it('should get "player two wins" if players select scissors and rock', () => {
    expect(game('scissors', 'rock')).toBe('player two wins');
  });
  it('should get "Is a draw" if two players select rock', () => {
    expect(game('rock', 'rock')).toBe('Is a draw');
  });
  it('should get "player one wins" if players select paper and rock', () => {
    expect(game('paper', 'rock')).toBe('player one wins');
  });
  it('should get "player two wins" if players select rock and paper', () => {
    expect(game('rock', 'paper')).toBe('player two wins');
  });
  it('should get "Is a draw" if two player select paper', () => {
    expect(game('paper', 'paper')).toBe('Is a draw');
  });
  it('should get "player one wins" if players select scissors and paper', () => {
    expect(game('scissors', 'paper')).toBe('player one wins');
  });
  it('should get "player two wins" if players select paper and scissors', () => {
    expect(game('paper', 'scissors')).toBe('player two wins');
  });
  it('should get "Is a draw" if two player select paper', () => {
    expect(game('scissors', 'scissors')).toBe('Is a draw');
  });
});
