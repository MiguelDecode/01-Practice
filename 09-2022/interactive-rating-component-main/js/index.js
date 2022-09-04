const $submit = document.getElementById("submit"),
  $cardBtns = document.querySelectorAll(".card__btn"),
  $cardRating = document.getElementById("card-rating"),
  $cardResponse = document.getElementById("card-response"),
  $cardSelected = document.getElementById("card-selected");

const removeActive = () => {
  $cardBtns.forEach((el) => el.classList.remove("active"));
};

let rating;

document.addEventListener("click", (event) => {
  if (event.target.classList.value.includes("card__btn")) {
    removeActive();
    event.target.classList.add("active");
    rating = event.target.textContent;
  }

  if (event.target === $submit) {
    $cardRating.classList.add("card--none");
    $cardResponse.classList.remove("card--none");

    $cardSelected.textContent = `You selected ${rating} out of 5`;
  }
});
