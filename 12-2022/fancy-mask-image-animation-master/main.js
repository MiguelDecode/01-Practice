const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");
const maskedImage2 = document.querySelector(".color-image-2");
const maskedImage3 = document.querySelector(".color-image-3");

resetButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);

  maskedImage2.classList.remove("mask-animation");
  setTimeout(() => maskedImage2.classList.add("mask-animation"), 100);

  maskedImage3.classList.remove("mask-animation");
  setTimeout(() => maskedImage3.classList.add("mask-animation"), 100);
});
