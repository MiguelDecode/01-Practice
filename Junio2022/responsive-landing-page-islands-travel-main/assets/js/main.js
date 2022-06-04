// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// SLIDER 
const sliderContainer = document.getElementById("main");
const slider = document.getElementById("slider");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");

const sliderImages = document.querySelectorAll(".island");

const rootStyles = document.documentElement.style;

let slideCounter = 0;
let isInTransition = false;

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const getTranformValue = () =>
  Number(rootStyles.getPropertyValue("--slide-transform").replace("%", ""));

const reorderSlide = () => {
  const transformValue = getTranformValue();
  rootStyles.setProperty("--transition", "none");
  if (slideCounter === sliderImages.length - 1) {
    slider.appendChild(slider.firstElementChild);
    rootStyles.setProperty("--slide-transform", `${transformValue + 100}%`);
    slideCounter--;
  } else if (slideCounter === 0) {
    slider.prepend(slider.lastElementChild);
    rootStyles.setProperty("--slide-transform", `${transformValue - 100}%`);
    slideCounter++;
  }
  isInTransition = false;
};

const moveSlide = (direction) => {
  if(isInTransition) return
  const transformValue = getTranformValue();
  rootStyles.setProperty("--transition", "transform 1s");
  isInTransition = true;

  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty("--slide-transform", `${transformValue + 100}%`);
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty("--slide-transform", `${transformValue - 100}%`);
    slideCounter++;
  }
};

buttonRight.addEventListener("click", () => moveSlide(DIRECTION.RIGHT));
buttonLeft.addEventListener("click", () => moveSlide(DIRECTION.LEFT));

slider.addEventListener("transitionend", reorderSlide);

reorderSlide();
