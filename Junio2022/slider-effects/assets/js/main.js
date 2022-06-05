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

// Considero que el problema se encuentra en este pedazo de código o también en el estilo aplicado al contenedor justify-content: center;
const reorderSlide = () => {
  if (slideCounter === sliderItems.length - 1) {
    sliderItem.appendChild(sliderItem.firstElementChild);
  }
};
// Considero que el problema se encuentra en este pedazo de código

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
