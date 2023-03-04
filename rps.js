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

function getUserChoice() {
  let humanChoice = document.getElementById("humanChoice").value;
  humanChoice = normalizeHumanChoice(humanChoice);
  testHumanChoice(humanChoice);
  console.log(humanChoice);
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
