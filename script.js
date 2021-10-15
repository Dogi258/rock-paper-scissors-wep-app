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

/*  Returns and array where the first element contains a message string for the 
    winner of the round and the second element contains the score value that will 
    be added to the running score.*/
function getWinnerArray(playerSelection, computerSelection) {
  // Make player selection case insensitive
  playerSelection = playerSelection.toLowerCase();

  // Returns the winner array
  if (playerSelection == "rock" && computerSelection == "paper") {
    return ["You lose! Paper beats Rock", -1];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return ["You win! Rock beats Scissors", 1];
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ["You lose! Scissors beats Paper", -1];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return ["You win! Paper beats Rock", 1];
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ["You lose! Rock beats Scissors", -1];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ["You win! Scissors beats Paper", 1];
  } else {
    return ["Tie!", 0];
  }
}

// Update the UI based on who won the round
function updateUI(winnerArray) {
  // Get message element
  const message = document.querySelector(".container-winner h3");
  console.log(message);

  // Update message
  message.textContent = winnerArray[0];

  // Update score
  score += winnerArray[1];

  // Update Score UI
  const scoreElement = document.querySelector(".container-score h4");
  scoreElement.textContent = score;
}

function playRound(e) {
  let winnerArray;

  if (e.target.id == "btn-rock") {
    winnerArray = getWinnerArray("rock", computerPlay());
  } else if (e.target.id == "btn-paper") {
    winnerArray = getWinnerArray("paper", computerPlay());
  } else {
    winnerArray = getWinnerArray("scissors", computerPlay());
  }

  updateUI(winnerArray);
}
// Game score
let score = 0;

// Get all three buttons
const gameButtons = document.querySelectorAll(".button");

// Add event listeners to play a round of the game
gameButtons.forEach((button) => button.addEventListener("click", playRound));
