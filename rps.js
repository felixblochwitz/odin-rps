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

function isGameOver() {
  if (round === 5) {
    if (humanScore > computerScore) {
      alert(`GAME OVER 
      You win with a score of ${humanScore} : ${computerScore}`);
    } else if (humanScore === computerScore) {
      alert(`GAME OVER
        It's a tie :|`);
    } else
      alert(`GAME OVER 
      You lose with a score of ${humanScore} : ${computerScore}`);
    round = 0;
    humanScore = 0;
    computerScore = 0;
    alert("Play Again");
    input.value = "";
  }
}

function compete(humanChoice, computerChoice) {
  console.log(round);
  if (!["Rock", "Paper", "Scissors"].includes(humanChoice)) {
    return;
  } else if (humanChoice === computerChoice) {
    alert(`The computer also chose ${computerChoice}. It's a DRAW!`);
    isGameOver();
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice == "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore += 1;
    alert(
      `The computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`
    );
    isGameOver();
  } else {
    computerScore += 1;
    alert(
      `The computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. YOU LOSE!`
    );
    isGameOver();
  }
  round++;
}

let round = 1;
let humanScore = 0;
let computerScore = 0;

const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  compete(getUserChoice(), getComputerChoice());
});
