const steps = document.querySelectorAll(".step");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let active = 0;

previous.addEventListener("click", () => {
  active--;
  if (active === 0) previous.setAttribute("disabled", "");
  if (active !== steps.length - 1) next.removeAttribute("disabled");

  steps[active + 1].classList.remove("step--active");
});

next.addEventListener("click", () => {
  active++;
  if (active !== 0) previous.removeAttribute("disabled");
  if (active === steps.length - 1) next.setAttribute("disabled", "");

  steps[active].classList.add("step--active");
});
