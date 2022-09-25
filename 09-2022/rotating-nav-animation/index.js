const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".circle-container");
const page = document.querySelector(".content");
const nav = document.querySelector(".nav");

open.addEventListener("click", () => {
  menu.classList.add("circle-container--rotate");
  page.classList.add("content--rotate");
  nav.classList.add("nav--active");
});

close.addEventListener("click", () => {
  menu.classList.remove("circle-container--rotate");
  page.classList.remove("content--rotate");
  nav.classList.remove("nav--active");
});
