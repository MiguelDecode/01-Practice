const boxes = document.querySelectorAll(".game__box");
const desk = document.querySelector(".game__desk");
const lineWinner = document.querySelector(".line-winner");

let turn = true;
const movesArray = new Array(9).fill(null);

console.log(boxes);

boxes.forEach(function (box, index) {
  box.textContent = index;
  box.addEventListener(
    "click",
    () => {
      if (turn) {
        box.classList.add("mark-x");
      } else {
        box.classList.add("mark-o");
      }
      movesArray[index] = turn;

      if (
        movesArray[0] === movesArray[1] &&
        movesArray[1] === movesArray[2] &&
        movesArray[0] !== null
      ) {
        lineWinner.classList.add("middle-top");
      } else if (
        movesArray[3] === movesArray[4] &&
        movesArray[4] === movesArray[5] &&
        movesArray[3] !== null
      ) {
        lineWinner.classList.add("middle");
      }

      turn = !turn;
    },
    { once: true }
  );
});
