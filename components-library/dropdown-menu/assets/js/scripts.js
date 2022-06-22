const icon = document.getElementById("icon");
const nav = document.getElementById("nav");

icon.addEventListener("click", () => {
  icon.classList.toggle("icon--active");
  nav.classList.toggle("nav--active");
});

