let round = 0;
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  let randomNumber = Math.random();
  return options[Math.floor(randomNumber * options.length)]
}

function getUserChoice() {
  let humanChoice = document.getElementById("humanChoice").value;
  humanChoice = normalizeHumanChoice(humanChoice);
  testHumanChoice(humanChoice);
  return humanChoice;
}

function normalizeHumanChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function testHumanChoice(choice) {
  const validChoices = ["Rock", "Paper", "Scissors"];
  if (!validChoices.includes(choice)) {
    alert(
      `${choice} is not a valid choice. Please choose one of 'Rock', 'Paper' or 'Scissors'.`
    );
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

const button = document.querySelector("button");
button.addEventListener("click", function () {
  compete(getUserChoice(), getComputerChoice());
});
