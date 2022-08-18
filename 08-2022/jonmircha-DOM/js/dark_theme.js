export default function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]");

  let moon = "🌕";
  let sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((n) => n.classList.remove(classDark));
    $themeBtn.textContent = moon;
    localStorage.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((n) => n.classList.add(classDark));
    $themeBtn.textContent = sun;
    localStorage.setItem("theme", "dark");
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

  document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") lightMode();

    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
