export default function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn);
  const selectors = document.querySelectorAll("[data-dark]");

  document.addEventListener("click", (event) => {
    let moon = "🌑";
    let sun = "🌕";

    if (event.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        selectors.forEach((el) => {
          el.classList.add(classDark);
          $themeBtn.textContent = sun;
        });
      } else {
        selectors.forEach((el) => {
          el.classList.remove(classDark);
          $themeBtn.textContent = moon;
        });
      }
    }
  });

  console.log(selectors);
}
