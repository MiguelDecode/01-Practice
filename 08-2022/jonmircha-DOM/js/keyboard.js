let x = 0;
let y = 0;

export function moveBall(event, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();

  switch (event.keyCode) {
    // Arrow Left
    case 37:
      event.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;
    // Arrow Up
    case 38:
      event.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;
    // Arrow Right
    case 39:
      event.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break;
    // Arrow Down
    case 40:
      event.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(event) {
  /* console.log(event.type);
  console.log(event.key);
  console.log(event.keyCode);
  console.log(event.ctrlKey);
  console.log(event.altKey);
  console.log(event.shiftKey); */

  if (event.key === "a" && event.altKey) {
    alert("Has lanzado una alerta con el Teclado");
  }

  if (event.key === "c" && event.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }

  if (event.key === "p" && event.altKey) {
    prompt("Has lanzado un prompt con el teclado");
  }
}
