const menu = document.getElementById("menu-toggle");
const mainNav = document.querySelector(".main-nav__list");

menu.addEventListener("click", () => {
  mainNav.classList.toggle("main-nav__list--active");
});
