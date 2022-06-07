const sliderContainer = document.getElementById("slider-container");
const sliderItem = document.getElementById("slider-item");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

const sliderItems = document.querySelectorAll(".slider-item");

const rootStyles = document.documentElement.style;

let slideCounter = 2;
let isInTransition = false;

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue("--slide-transform").replace("px", ""));

const reorderSlide = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "none");
  if (slideCounter === sliderItems.length - 1) {
    sliderContainer.appendChild(sliderContainer.firstElementChild);
    rootStyles.setProperty(
      "--slide-transform",
      `${transformValue + sliderItems[slideCounter].scrollWidth + 16}px`
    );
    slideCounter--;
  } else if (slideCounter === 0) {
    sliderContainer.prepend(sliderContainer.lastElementChild);
    rootStyles.setProperty(
      "--slide-transform",
      `${transformValue - sliderItems[slideCounter].scrollWidth - 16}px`
    );
    slideCounter++;
  }
  isInTransition = false;
};

const moveSlider = (direction) => {
  if(isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty("--transition", "transform 1s");
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      "--slide-transform",
      `${transformValue + sliderItems[slideCounter].scrollWidth + 16}px`
    );
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      "--slide-transform",
      `${transformValue - sliderItems[slideCounter].scrollWidth - 16}px`
    );
    slideCounter++;
  }
};



btnRight.addEventListener("click", () => moveSlider(DIRECTION.RIGHT));
btnLeft.addEventListener("click", () => moveSlider(DIRECTION.LEFT));

sliderItem.addEventListener('transitionend', reorderSlide);

reorderSlide();