function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber]
}

function compete(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    console.log("Draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(humanChoice);
    console.log(computerChoice);
    console.log("Win!");
  } else {
    console.log(humanChoice);
    console.log(computerChoice);
    console.log("Lose!");
  }
}

const rockButton = document.querySelector("#play-button-rock");
rockButton.addEventListener("click", function () {
  compete("rock", getComputerChoice());
});

const paperButton = document.querySelector("#play-button-paper");
paperButton.addEventListener("click", function () {
  compete("paper", getComputerChoice());
});

const scissorsButton = document.querySelector("#play-button-scissors");
scissorsButton.addEventListener("click", function () {
  compete("scissors", getComputerChoice());
});
