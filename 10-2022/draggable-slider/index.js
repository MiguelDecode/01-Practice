const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

let isPressedDown = false;
let cursorXSpace;

container.addEventListener("mousedown", (event) => {
  isPressedDown = true;
  cursorXSpace = event.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (event) => {
  if (!isPressedDown) return;
  event.preventDefault();
  cards.style.left = `${event.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const containerRect = container.getBoundingClientRect();
  const cardsRect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cardsRect.right < containerRect.right) {
    cards.style.left = `-${cardsRect.width - containerRect.width}px`;
  }
}
