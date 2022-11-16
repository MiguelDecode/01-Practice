export function shortcuts() {
  if (event.key === "a" && event.altKey) {
    alert("This is a alert created by a shortcut");
  }

  if (event.key === "c" && event.altKey) {
    confirm("This is a confirm created by a shortcut");
  }

  if (event.key === "p" && event.altKey) {
    prompt("This is a prompt created by a shortcut");
  }
}

let x = 0;
let y = 0;

export function moveBall(event, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  switch (event.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        event.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        event.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        event.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        event.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
