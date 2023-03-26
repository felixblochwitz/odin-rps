function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    console.log("Rock");
    return "Rock";
  } else if (0.33 <= randomNumber && randomNumber < 0.67) {
    console.log("Paper");
    return "Paper";
  } else {
    console.log("Scissors");
    return "Scissors";
  }
}

function compete(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "Rock":
      if (computerChoice == "Scissors") {
        alert(`The computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
      } else if (computerChoice == "Paper") {
        alert(`The computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. YOU LOSE!`);
      }
      else {
        alert(`The computer also chose ${computerChoice}. It's a DRAW!`)
      }
      break;
    case "Paper":
      if (computerChoice == "Rock") {
        alert(`The computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
      } else if (computerChoice == "Scissors") {
        alert(`The computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. YOU LOSE!`);
      }
      else {
        alert(`The computer also chose ${computerChoice}. It's a DRAW!`)
      }
      break;
    case "Scissors":
      if (computerChoice == "Paper") {
        alert(`The computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
      } else if (computerChoice == "Rock") {
        alert(`The computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. YOU LOSE!`);
      }
      else {
        alert(`The computer also chose ${computerChoice}. It's a DRAW!`)
      }
      break;
  }
}

const rockButton = document.querySelector("#play-button-rock")
console.log(rockButton);
rockButton.addEventListener("click", function () {
  logSomeShit("rock", getComputerChoice())
});

const paperButton = document.querySelector("#play-button-paper")
console.log(paperButton);
paperButton.addEventListener("click", function () {
  logSomeShit("paper", getComputerChoice())
});

const scissorsButton = document.querySelector("#play-button-scissors")
console.log(scissorsButton);
scissorsButton.addEventListener("click", function () {
  logSomeShit("scissors", getComputerChoice())
});
