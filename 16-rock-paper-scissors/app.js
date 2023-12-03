const userInitialScore = 0;
const systemInitialScore = 0;

const userScore = document.getElementById("user-score");
const systemScore = document.getElementById("system-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getSystemChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function game(userChoice) {
  const systemChoice = getSystemChoice();

  switch (userChoice + systemChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win();
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose();
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
