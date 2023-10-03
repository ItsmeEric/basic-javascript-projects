const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Math.floor used to round down the given random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
