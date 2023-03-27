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

function updateScore(roundResult) {
  const humanScoreSpan = document.querySelector("#player-score");
  const computerScoreSpan = document.querySelector("#computer-score");
  let humanScore = parseInt(humanScoreSpan.textContent);
  let computerScore = parseInt(computerScoreSpan.textContent);
  if (roundResult === "WIN") {
    humanScoreSpan.textContent = humanScore += 1;
  } else if (roundResult === "LOSE") {
    computerScoreSpan.textContent = computerScore += 1;
  }
}

function compete(humanChoice, computerChoice) {
  const playerScoreSpan = document.querySelector("#player-score");
  const computerScoreSpan = document.querySelector("#computer-score");

  if (
    playerScoreSpan.textContent === "5" ||
    computerScoreSpan.textContent === "5"
  ) {
    showModal(playerScoreSpan, computerScoreSpan);
    return;
  }
  else if (humanChoice === computerChoice) {
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
  showChoices(humanChoice, computerChoice);
}

function resetGame() {
  const choiceImages = document.querySelectorAll(".choice-img");
  const competitorScores = document.querySelectorAll(".competitor-scores");
  const resultText = document.querySelector("#round-result-text");
  choiceImages.forEach((img) => (img.src = ""));
  competitorScores.forEach((score) => (score.textContent = "0"));
  resultText.textContent = "Who will win?";
}

function showModal(playerScoreSpan, computerScoreSpan) {
  const playerScore = parseInt(playerScoreSpan.textContent);
  const computerScore = parseInt(computerScoreSpan.textContent);
  if (playerScore > computerScore) {
    const modal = document.querySelector("#player-won");
    modal.classList.add("modal-active");
  } else {
    const modal = document.querySelector("#computer-won");
    modal.classList.add("modal-active");
  }
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
}

function closeModal() {
  console.log("been clicked");
  const endgameModals = document.querySelectorAll(".endgame-modal");
  const overlay = document.querySelector(".overlay");

  endgameModals.forEach((modal) => modal.classList.remove("modal-active"));
  overlay.style.display = "none";
}

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

const observer = new MutationObserver(function (mutations) {
  console.log(mutations);
  mutations.forEach(function (mutation) {
    if (
      mutation.type === "childList" &&
      [playerScoreSpan, computerScoreSpan].includes(mutation.target) &&
      mutation.target.textContent === "5"
    ) {
      setTimeout(showModal(playerScoreSpan, computerScoreSpan), 10);
    }
  });
});

const config = { childList: true };
observer.observe(playerScoreSpan, config);
observer.observe(computerScoreSpan, config);

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

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", closeModal);
restartButton.addEventListener("click", resetGame);

const restartButton2 = document.querySelector("#restart-button2");
restartButton2.addEventListener("click", closeModal);
restartButton2.addEventListener("click", resetGame);

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", closeModal);
