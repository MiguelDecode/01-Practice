const counterDisplay = document.querySelector(".counter__count");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

let count = 0;
counterDisplay.textContent = count;

const drawColor = () => {
  if (count < 0) {
    counterDisplay.style.color = "red";
  } else if ((count == 0)) {
    counterDisplay.style.color = "white";
  } else {
    counterDisplay.style.color = "green";
  }
};

btnDecrease.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
  drawColor();
});

btnReset.addEventListener("click", () => {
  counterDisplay.textContent = 0;
  count = 0;
  drawColor();
});

btnIncrease.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
  drawColor();
});
