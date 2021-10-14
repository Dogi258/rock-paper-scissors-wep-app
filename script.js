// This function returns 'rock', 'paper'or 'scissors' at random for the computer's turn
function computerPlay() {
  // Contains random number between 0 and 2 inclusive
  let randNum = Math.floor(Math.random() * 3);

  if (randNum == 0) {
    return "rock";
  } else if (randNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  // Make player selection case insensitive
  playerSelection = playerSelection.toLowerCase();

  // Returns the winner
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper";
  } else {
    return "Tie!";
  }
}

function game() {
  let score = 0;
  const numOfRounds = 5;
  for (let i = 0; i < numOfRounds; i++) {
    // Get user input
    let playerSelection = window.prompt("Rock, paper, or scissors?");
    // Get computer selection
    let computerSelection = computerPlay();
    // Get round message
    let roundMsg = playRound(playerSelection, computerSelection);
    console.log(roundMsg);

    // Add to the final score if player won
    if (roundMsg.includes("win")) {
      score++;
    }
  }
  // Show wiinner
  if (score < 3) {
    console.log("Player loses game! " + score + "/" + numOfRounds);
  } else console.log("Player wins game! " + score + "/" + numOfRounds);
}

//game();
