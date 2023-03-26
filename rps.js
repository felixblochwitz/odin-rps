let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function showChoices(humanChoice, computerChoice) {
  const imageMap = {
    rock: "images/rock_ohne.png",
    paper: "images/paper_ohne.png",
    scissors: "images/scissors_ohne.png",
  };
  const humanChoiceImg = document.querySelector("#human-choice-img");
  const computerChoiceImg = document.querySelector("#computer-choice-img");

  humanChoiceImg.src = imageMap[humanChoice];
  computerChoiceImg.src = imageMap[computerChoice];
}

function showRoundResultText(humanChoice, computerChoice, roundResult) {
  const roundResultElement = document.querySelector("#round-result-text");
  let resultString = "";
  if (roundResult === "WIN" || roundResult === "LOSE") {
    resultString = `You chose ${humanChoice}, the computer chose ${computerChoice}.
      <br>You ${roundResult}!`;
  } else {
    resultString = `You both made the same choice, leading to the saddest result in sports.
      <br>It's a ${roundResult}!`;
  }
  roundResultElement.innerHTML = resultString;
}

function compete(humanChoice, computerChoice) {
  showChoices(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    const roundResult = "DRAW";
    showRoundResultText(humanChoice, computerChoice, roundResult);
    updateScore(roundResult);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    const roundResult = "WIN";
    showRoundResultText(humanChoice, computerChoice, roundResult);
    updateScore(roundResult);
  } else {
    const roundResult = "LOSE";
    showRoundResultText(humanChoice, computerChoice, roundResult);
    updateScore(roundResult);
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
