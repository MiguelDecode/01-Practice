export default function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn);
  const selectors = document.querySelectorAll("[data-dark]");

  const moon = "🌑";
  const sun = "🌕";

  const darkMode = () => {
    selectors.forEach((el) => {
      el.classList.add(classDark);
      $themeBtn.textContent = sun;
      localStorage.setItem("theme", "light");
    });
  };

  const lightMode = () => {
    selectors.forEach((el) => {
      el.classList.remove(classDark);
      $themeBtn.textContent = moon;
      localStorage.setItem("theme", "dark");
    });
  };

  document.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") lightMode();

    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
