const sliderContainer = document.getElementById("slider-container");
const sliderItem = document.getElementById("slider-item");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

const sliderItems = document.querySelectorAll(".slider-item");

const rootStyles = document.documentElement.style;

let slideCounter = 2;

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue("--slide-transform").replace("px", ""));

const reorderSlide = () => {
  if (slideCounter === sliderItems.length -1) {
    sliderItem.appendChild(sliderItem.firstElementChild);
  }
};

const moveSlider = (direction) => {
  const transformValue = getTransformValue();
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

  reorderSlide();
};


btnRight.addEventListener("click", () => moveSlider(DIRECTION.RIGHT));
btnLeft.addEventListener("click", () => moveSlider(DIRECTION.LEFT));
