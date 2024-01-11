/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw

Return:
- PLayer one wins
- PLayer two wins
- Is a draw
*/

export const game = (playerOneMove, playerTwoMove) => {
  if (
    (playerOneMove == 'rock' && playerTwoMove == 'scissors') ||
    (playerOneMove == 'paper' && playerTwoMove == 'rock') ||
    (playerOneMove == 'scissors' && playerTwoMove == 'paper')
  ) {
    return 'player one wins';
  }
  if (
    (playerOneMove == 'scissors' && playerTwoMove == 'rock') ||
    (playerOneMove == 'rock' && playerTwoMove == 'paper') ||
    (playerOneMove == 'paper' && playerTwoMove == 'scissors')
  ) {
    return 'player two wins';
  }

  return 'Is a draw';
};
