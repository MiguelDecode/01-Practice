const book = document.getElementById("book");
const song = document.getElementById("song");
const whishlist = document.getElementById("whislist");
const input = document.getElementById("whishes");
const body = document.querySelector(".body");

input.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    const $li = document.createElement("li");
    $li.textContent = input.value;
    $li.classList.add("whishlist__item");
    whishlist.appendChild($li);
    input.value = "";
  }
});

book.addEventListener("mouseenter", () => {
  song.play();
});

book.addEventListener("mouseleave", () => {
  song.pause();
});

// Snow effect

const getRandomValue = (max, min= 1) => {
return Math.floor(Math.random() * max) + min; 
}

const createSnow = (density) => {
  for (let i = 0; i < density; i++) {
    const snowFlake = document.createElement("span");

    const randomHorizontalPosition = `${getRandomValue(100)}%`;
    const randomFallDelay = `${getRandomValue(100)}s`;
    const randomFallDuration = `${getRandomValue(20,5)}s`;
    const randomFlakeSize = `${getRandomValue(7,1)}px`;
    const randomFlakeOpacity = Math.random().toFixed(2);

    snowFlake.style.width = randomFlakeSize;
    snowFlake.style.height = randomFlakeSize;
    snowFlake.style.opacity = randomFlakeOpacity;
    snowFlake.style.right = randomHorizontalPosition;
    snowFlake.style.animation = `fall ${randomFallDuration} ${randomFallDelay} linear infinite`;
    snowFlake.classList.add("snow");

    body.appendChild(snowFlake);
  }
};

createSnow(300);
