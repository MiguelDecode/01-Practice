const blackJack = (() => {
  "use strict";

  // VARIABLES

  const btnNewGame = document.getElementById("new-game"),
    btnNewCard = document.getElementById("new-card"),
    btnStop = document.getElementById("stop-game"),
    types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  const displaysPoints = document.querySelectorAll(".display");
  const displaysCards = document.querySelectorAll(".card-container");

  let deck = [];
  let playersPoints = [];

  // This function init a game of BlackJack
  const initGame = (amountPlayers = 2) => {
    deck = createDeck();

    playersPoints = [];

    for (let i = 0; i < amountPlayers; i++) {
      playersPoints.push(0);
    }

    displaysPoints.forEach((display) => (display.textContent = 0));

    displaysCards.forEach((display) => (display.innerHTML = ""));

    btnNewCard.disabled = false;
    btnStop.disabled = false;
  };

  // This function create and shuffle a new Deck
  const createDeck = () => {
    deck = [];

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

    return _.shuffle(deck);
  };

  // Take a card from the deck
  const takeCard = () => {
    if (deck.length === 0) {
      throw "No cards in the deck";
    }

    return deck.pop();
  };

  // Calculate the value of a card
  const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
  };

  // Who win the match
  const calcWinner = () => {
    const [playerPoints, computerPoints] = playersPoints;

    setTimeout(() => {
      if (computerPoints === playerPoints) {
        alert("Computer and player draw");
      } else if (playerPoints > 21) {
        alert("Computer Wins");
      } else if (computerPoints > 21) {
        alert("Player Wins");
      } else {
        alert("Computer Wins");
      }
    }, 300);
  };

  // COMPUTER PLAY
  const computerPlay = (minPoints) => {
    let computerPoints = 0;

    do {
      const card = takeCard();

      computerPoints = addPoints(card, playersPoints.length - 1);

      drawCard(card, playersPoints.length - 1);
    } while (computerPoints <= minPoints && minPoints <= 21);

    calcWinner();
  };

  // Acumulate points of players Turn: 0 = First Player, 1 = Second Player, Last = Computer
  const addPoints = (card, turn) => {
    playersPoints[turn] = playersPoints[turn] + valueCard(card);
    displaysPoints[turn].textContent = playersPoints[turn];

    return playersPoints[turn];
  };

  // Insert a card in player table zone
  const drawCard = (card, turn) => {
    const img = document.createElement("img");
    img.src = `./assets/cards/${card}.png`;
    img.classList.add("card");
    img.alt = "Card";
    displaysCards[turn].appendChild(img);
  };

  //  EVENTS
  btnNewCard.addEventListener("click", () => {
    const card = takeCard();

    const playerPoints = addPoints(card, 0);

    drawCard(card, 0);

    if (playerPoints > 21) {
      btnNewCard.disabled = true;
      btnStop.disabled = true;
      computerPlay(playerPoints);
    } else if (playerPoints === 21) {
      btnNewCard.disabled = true;
      btnStop.disable = true;
      computerPlay(playerPoints);
    }
  });

  btnNewGame.addEventListener("click", () => {
    initGame();
  });

  btnStop.addEventListener("click", () => {
    btnNewCard.disabled = true;
    btnStop.disabled = true;

    computerPlay(playersPoints[0]);
  });

  return {
    newGame: initGame,
  };
})();
