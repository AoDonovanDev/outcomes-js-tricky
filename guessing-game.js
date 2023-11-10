function guessingGame() {
  const secret = Math.floor(Math.random()*101)
  let count = 0;
  let hasWon = false;

  return function game (guess){
    if(hasWon) return "The game is over, you already won!"
    count++
    if(guess === secret){
      hasWon = true;
      return `You win! You found ${secret} in 3 guesses.`
    }
    if(guess > secret){
      return `${guess} is too high!`
    }
    if(guess < secret){
      return `${guess} is too low!`
    }
  }

}

module.exports = { guessingGame };
