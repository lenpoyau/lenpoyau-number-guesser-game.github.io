let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
  };
  
  // function for absolute distance
  const getAbsolDist = (u, t) => Math.abs(u - t);
  
  // return true if user is closer to target number
  const compareGuesses = (userGuess, computerGuess,targetNum) => {
      // check/verify user guess between 0 - 9
      if((userGuess < 0) || (userGuess > 9)) {
          console.log(`user guess is out of range. ${userGuess} is invalid. enter 0 -9`);
        } else if (getAbsolDist(userGuess, targetNum) <= getAbsolDist(computerGuess, targetNum)) {
      // deals with user being tied or closer to target. User wins
     return true;
    } else {
      return false;
    }
  };
  
  const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
  };
  
  const advanceRound = () => {
    currentRoundNumber += 1;
  };
  
  //console.log("Target number is: " + generateTarget());
  const playGame = () => {
    let winner;
    let result;
    let round;
    console.log("Current score - user: " + humanScore + " Computer: " + computerScore);
    console.log("Playing round: " + currentRoundNumber);
    result = compareGuesses(10,4, generateTarget());
    if(result === true) {
      winner ='human'
    } else {
      winner = 'computer';
    }
    
    updateScore(winner);
    round = advanceRound();
    console.log("Current score - user: " + humanScore + " Computer: " + computerScore);
  };
  
  // playGame();

