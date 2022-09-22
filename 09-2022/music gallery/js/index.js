const cards = document.querySelectorAll(".card");
const musicPlayerControls = document.querySelector(".music-player__controls");
const musicPlayer = document.querySelector(".music-player");
const closePlayer = document.getElementById("close-player");
const musicPlayerTitle = document.querySelector(".music-player__title");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card)
    let source = card.getAttribute("data-src");
    let title = card.lastElementChild.textContent;
    musicPlayerControls.setAttribute("src", source);
    musicPlayerControls.play();
    musicPlayerTitle.innerHTML = title;
  });
});

closePlayer.addEventListener("click", () => {
  musicPlayer.classList.toggle("music-player--hidden");
  closePlayer.classList.toggle("music-player__toggle--active");
});
