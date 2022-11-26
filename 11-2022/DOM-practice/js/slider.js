export default function slider() {
  const $prevBtn = document.getElementById("prev");
  const $nextBtn = document.getElementById("next");
  const $slides = document.querySelectorAll(".slide");

  let i = 0;

  document.addEventListener("click", (event) => {
    if (event.target === $prevBtn) {
      event.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) i = $slides.length - 1;

      $slides[i].classList.add("active");
    }

    if (event.target === $nextBtn) {
      event.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i > $slides.length - 1) i = 0;

      $slides[i].classList.add("active");
    }
  });
}
