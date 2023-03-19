function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.random();
  return options[Math.floor(randomNumber * options.length)];
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
    input.value = "";
  }
}

function compete(humanChoice, computerChoice) {
  if (!["Rock", "Paper", "Scissors"].includes(humanChoice)) {
    return;
  }
  else if (humanChoice === computerChoice) {
    alert(`The computer also chose ${computerChoice}. It's a DRAW!`);
    return;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice == "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    alert(
      `The computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`
    )
    return;
  } else {
    alert(
      `The computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. YOU LOSE!`
    );
    return;
  }
}

const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  compete(getUserChoice(), getComputerChoice());
});
