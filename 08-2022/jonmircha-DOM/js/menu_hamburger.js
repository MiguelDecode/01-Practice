export default function hamburgerMenu(menuBtn, menuAside, navLink) {
  document.addEventListener("click", (event) => {
    if (event.target.matches(menuBtn) || event.target.matches(`${menuBtn} *`)) {
      document.querySelector(menuAside).classList.toggle("is-active");
      document.querySelector(menuBtn).classList.toggle("is-active");
    }

    if (event.target.matches(navLink)) {
      document.querySelector(menuAside).classList.remove("is-active");
      document.querySelector(menuBtn).classList.remove("is-active");
    }
  });
}
