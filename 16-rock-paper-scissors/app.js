let userInitialScore = 0;
let systemInitialScore = 0;

const userScore = document.getElementById("user-score");
const systemScore = document.getElementById("system-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getSystemChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function win(userChoice, systemChoice) {
  userInitialScore++;
  userScore.innerHTML = userInitialScore;
  systemScore.innerHTML = systemInitialScore;
  result.innerHTML = `${userChoice.toLocaleUpperCase()} beats ${systemChoice.toLocaleUpperCase()}. You WIN!`;
}

function lose() {
  //   systemInitialScore++;
}

function draw() {}

function game(userChoice) {
  const systemChoice = getSystemChoice();

  switch (userChoice + systemChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, systemChoice);
      break;
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, systemChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(userChoice, systemChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();

getSystemChoice();
