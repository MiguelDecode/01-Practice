export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    // console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
  };

  document.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    // console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
}
