function guessingGame() {
  const secret = Math.floor(Math.random()*101)
  const count = 0;

  return function game (guess){
    count++
    if(guess === secret){
      return `You win! You found ${secret} in 3 guesses`
    }
    if(guess > secret){
      return `${guess} is too high!`
    }
    if(gues < secret){
      return `${guess} is too low!`
    }
  }

}

module.exports = { guessingGame };
