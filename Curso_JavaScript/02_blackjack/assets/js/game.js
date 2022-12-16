// 2C = Two of Clubs (Tréboles)
// 2H = Two of Hearts
// 2S = Two of Spades
// 2D = Two of Diamonds

// VARIABLES

const btnNewGame = document.getElementById("new-game");
const btnNewCard = document.getElementById("new-card");
const btnStop = document.getElementById("stop-game");
const displayPlayer = document.getElementById("display-player");
const displayComputer = document.getElementById("display-computer");
const playerCards = document.getElementById("player-cards");
const computerCards = document.getElementById("computer-cards");
let playerPoints = 0;
let computerPoints = 0;

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

// This function create and shuffle a new Deck;
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let especial of specials) {
      deck.push(especial + type);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

createDeck();

const takeCard = () => {
  if (deck.length === 0) {
    throw "No cards in the deck";
  }

  const card = deck.pop();
  return card;
};

// Calculate the value of a card
const valueCard = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

// Computer play
const computerPlay = (minPoints) => {
  do {
    const card = takeCard();

    computerPoints = computerPoints + valueCard(card);
    displayComputer.textContent = computerPoints;

    const img = document.createElement("img");
    img.src = `./assets/cards/${card}.png`;
    img.alt = "Card";
    img.classList.add("card");
    computerCards.appendChild(img);

    if (minPoints > 21) {
      break;
    }
  } while (computerPoints <= minPoints && minPoints <= 21);
};

//  Eventos

btnNewCard.addEventListener("click", () => {
  const card = takeCard();

  playerPoints = playerPoints + valueCard(card);
  displayPlayer.textContent = playerPoints;

  const img = document.createElement("img");
  img.src = `./assets/cards/${card}.png`;
  img.classList.add("card");
  img.alt = "Card";
  playerCards.appendChild(img);

  if (playerPoints > 21) {
    console.warn("Sorry, You lost the game");
    btnNewCard.disabled = true;
    computerPlay(playerPoints);
  } else if (playerPoints === 21) {
    console.warn("Congratulations, You reach 21 points");
    btnNewCard.disabled = true;
    computerPlay(playerPoints);
  }
});

btnNewGame.addEventListener("click", () => {
  playerPoints = 0;
  computerPoints = 0;
  displayPlayer.textContent = 0;
  displayComputer.textContent = 0;

  playerCards.innerHTML = "";
  computerCards.innerHTML = "";

  btnNewCard.disabled = false;
});

btnStop.addEventListener("click", () => {
  computerPlay()
});

