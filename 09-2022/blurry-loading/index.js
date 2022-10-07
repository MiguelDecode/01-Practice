const progress = document.querySelector(".progress");
const body = document.querySelector("body");

let value = 100;

let counter = setInterval(drawProgress, 50);

function drawProgress() {
  if (value === 0) {
    progress.setAttribute('style', 'opacity: 0')
    clearInterval(counter);
  } else {
    progress.setAttribute('style', `opacity: ${value/100}`)
    body.setAttribute("style", `backdrop-filter: blur(${value}px)`);
    progress.innerText = `${value}%`;

    value--;
  }
}
