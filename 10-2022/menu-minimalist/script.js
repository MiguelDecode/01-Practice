const menu = document.getElementById("menu");
const navItems = document.querySelectorAll(".nav__item");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  nav.classList.toggle("nav--active");
});

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let background = item.getAttribute("data-bg");
    nav.style.background = `url('${background}')`;
  });
});
