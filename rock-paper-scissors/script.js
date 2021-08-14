function computerPlay() {
  // Defines possible plays
  const possiblePlays = ["rock", "paper", "scissors"];
  // Makes a random selection from possible plays
  var randomNumber = Math.floor(Math.random() * possiblePlays.length);
  var play = possiblePlays[randomNumber];
  // Returns selection
  return play;
}

function playRound(computerSelection, roundNumber, previousOutcome) {
  // Asks player to make a selection. Displays round number and outcome of previous round if the current round is not 1
  if (roundNumber == 1) {
    playerSelection = window.prompt(
      'Enter "rock", "paper", or "scissors" to start!'
    );
  } else {
    playerSelection = window.prompt(
      `Round ${
        roundNumber - 1
      }: ${previousOutcome}.\nRound ${roundNumber}: Enter "rock", "paper", or "scissors"`
    );
  }
  // Converts player's selection to lowercase
  playerSelection = playerSelection.toLowerCase();
  // Checks to see if player played "rock", "paper", or "scissors", returns an error in the form of an alert and error in console if they didn't
  validPlayerSelections = ["rock", "paper", "scissors"];
  if (validPlayerSelections.includes(playerSelection)) {
  } else {
    alert(
      'Invalid play selection. You must choose "rock", "paper", or "scissors".'
    );
    console.error(`Invalid play selection: ${playerSelection}"`);
    if (roundNumber > 1) {
      return playRound(computerPlay(), roundNumber, previousOutcome);
    } else {
      game();
    }
  }
  // Checks if player won by comparing each player selection to each computer selection with if statements, and returns round outcome
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      var outcome = "draw";
      return outcome;
    }
    if (computerSelection == "paper") {
      var outcome = "lose";
      return outcome;
    }
    if (computerSelection == "scissors") {
      var outcome = "win";
      return outcome;
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      var outcome = "win";
      return outcome;
    }
    if (computerSelection == "paper") {
      var outcome = "draw";
      return outcome;
    }
    if (computerSelection == "scissors") {
      var outcome = "lose";
      return outcome;
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      var outcome = "lose";
      return outcome;
    }
    if (computerSelection == "paper") {
      var outcome = "win";
      return outcome;
    }
    if (computerSelection == "scissors") {
      var outcome = "draw";
      return outcome;
    }
  }
}

function game() {
  // Create object to track outcomes
  var outcomes = {
    wins: 0,
    losses: 0,
    draws: 0,
  };
  var roundOutcome = null;
  // Repeat a round 5 times
  for (var i = 1; i <= 5; i++) {
    roundOutcome = playRound(computerPlay(), i, roundOutcome);
    // Increment wins in outcomes object if round won and so on.
    if (roundOutcome == "win") {
      outcomes.wins += 1;
    } else if (roundOutcome == "lose") {
      outcomes.losses += 1;
    } else if (roundOutcome == "draw") {
      outcomes.draws += 1;
    }
  }
  // Check if there are more wins than losses, more losses than wins, or neither. Displays alert that player won, lost, or drew respectively.
  if (outcomes.wins > outcomes.losses) {
    return alert("You won the game! Refresh to play again.");
  } else if (outcomes.losses > outcomes.wins) {
    return alert("You lost the game! Refresh to play again.");
  } else {
    return alert("Draw! Refresh to play again.");
  }
}

// Calls game function when user loads the page
game();
