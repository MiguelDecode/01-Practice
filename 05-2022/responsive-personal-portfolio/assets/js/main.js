// MENU

let menu = document.getElementById("menu-btn");
let nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("active");
});

// ANIMATION PRESENTATION

const animationText = [
  "aprender cosas nuevas.",
  "resolver problemas.",
  "trabajar en equipo.",
];

let i = 0;

const roulette = () => {
  if (i === animationText.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("roulette").innerHTML = animationText[i];
};

roulette();

setInterval(() => {
  roulette();
}, 3500);
