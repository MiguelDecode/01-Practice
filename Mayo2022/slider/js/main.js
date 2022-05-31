const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");

const rootStyles = document.documentElement.style;

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const moveSlide = direction => {

  if(direction === DIRECTION.LEFT) {
    rootStyles.setProperty('--slide-transform', '100%')
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty('--slide-transform', '0')
  }
}

buttonRight.addEventListener("click", () => moveSlide(DIRECTION.RIGHT));
buttonLeft.addEventListener("click", () => moveSlide(DIRECTION.LEFT));


