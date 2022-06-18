const starbucks = document.getElementById("starbucks");
const circle = document.getElementById("circle");
const drink1 = document.getElementById("drink1");
const drink2 = document.getElementById("drink2");
const drink3 = document.getElementById("drink3");

drink1.addEventListener("click", () => {
  starbucks.setAttribute("src", "./assets/img/img1.png");
  circle.classList.remove('circle--bg-secondary');
  circle.classList.remove('circle--bg-tertiary');
  circle.classList.add('circle--bg-primary')
});

drink2.addEventListener("click", () => {
  starbucks.setAttribute("src", "./assets/img/img2.png");
  circle.classList.remove('circle--bg-primary');
  circle.classList.remove('circle--bg-tertiary')
  circle.classList.add('circle--bg-secondary')
});

drink3.addEventListener("click", () => {
  starbucks.setAttribute("src", "./assets/img/img3.png");
  circle.classList.remove('circle--bg-secondary');
  circle.classList.remove('circle--bg-primary')
  circle.classList.add('circle--bg-tertiary')
});
