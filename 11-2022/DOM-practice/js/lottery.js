export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    console.log($players, random, winner);

    return `The winner is ${winner.textContent}`;
  };

  document.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      let result = getWinner(selector);
      console.log(result)
    }
  });
}
