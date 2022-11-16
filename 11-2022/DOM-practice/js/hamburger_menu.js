export default function hamburgerMenu(hamburgerBtn, aside, menuLink) {
  document.addEventListener("click", (event) => {
    if (
      event.target.matches(hamburgerBtn) ||
      event.target.matches(`${hamburgerBtn} *`)
    ) {
      document.querySelector(aside).classList.toggle("active");
      document.querySelector(hamburgerBtn).classList.toggle("is-active");
    }

    if(event.target.matches(menuLink)) {
      document.querySelector(aside).classList.remove("active");
      document.querySelector(hamburgerBtn).classList.remove("is-active");
    }
  });
}
