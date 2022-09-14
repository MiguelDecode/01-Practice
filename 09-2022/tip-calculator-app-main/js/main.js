const $bill = document.getElementById("bill"),
  $custom = document.getElementById("custom"),
  $people = document.getElementById("people"),
  $reset = document.getElementById("btn-reset"),
  $tipAmount = document.getElementById("tip-amount"),
  $totalAmount = document.getElementById("total-amount"),
  $porcentageSelectors = document.querySelectorAll(
    ".section__porcentage-number"
  );

let bill = 0.0;
let people = 1;
let tipPorcentage = 0.0;
let tipAmount = 0.0;
let totalAmount = 0.0;

// Función para eliminar el active
const removeActive = () => {
  $porcentageSelectors.forEach((el) => {
    el.classList.remove("active");
  });
};

// Función de escucha a todos los porcentajes
$porcentageSelectors.forEach((el) => {
  el.addEventListener("click", () => {
    removeActive();
    el.classList.add("active");
    tipPorcentage = parseFloat(el.innerHTML) / 100;
    $custom.value = 0;
    calculateTip();
  });
});

// Función que elimina los active en caso de escoger uno custom
$custom.addEventListener("input", () => {
  removeActive();
  tipPorcentage = parseFloat($custom.value)/100;
  calculateTip();
});

// Función de escucha del input Bill
$bill.addEventListener("input", billInput);

function billInput() {
  bill = parseFloat($bill.value);
  calculateTip();
}

// Función de escucha del input People
$people.addEventListener("input", peopleInput);

function peopleInput() {
  people = parseInt($people.value);
  calculateTip();
}

// Función que calcula la cantidad a dejar de propina
function calculateTip() {
  let tipAmount = (bill * tipPorcentage);
  let totalAmount = tipAmount / people;

  $tipAmount.innerHTML = "$" + tipAmount.toFixed(2);
  $totalAmount.innerHTML = "$" + totalAmount.toFixed(2);
}

// Función de reseteo de valores
$reset.addEventListener("click", () => {
  $bill.value = "";
  $people.value = "";
  $custom.value = "";
  $tipAmount.innerHTML = "$" + (0.0).toFixed(2);
  $totalAmount.innerHTML = "$" + (0.0).toFixed(2);
});
