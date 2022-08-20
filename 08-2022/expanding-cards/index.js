const flexItems = document.querySelectorAll(".flex-item");

function removeActive() {
  flexItems.forEach((n) => n.classList.remove("active"));
}

flexItems.forEach((n) =>
  n.addEventListener("click", () => {
    removeActive();
    n.classList.add("active");
  })
);