const $formTitle = document.getElementById("form-title"),
  $sectionTitle = document.getElementById("section-title"),
  $section = document.getElementById("section"),
  $article = document.getElementById("section-article"),
  $form = document.getElementById("form");

function clickTitle() {
  console.log("Has hecho click en el título del formulario de registro");
}

// $formTitle.onclick = clickTitle;

$formTitle.addEventListener("click", () => {
  console.log("Has hecho click en el título del formulario de registro");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("El documento se ha cargado");
});

const sendForm = (event) => {
  event.preventDefault();

  // console.log(event);
  // console.log(event.target.name.value);
  // console.log(event.target.email.value);
  // console.log(event.target.password.value);

  const { name, email, password } = event.target;

  console.log(name.value, email.value, password.value);
};

$form.addEventListener("submit", sendForm);

$section.addEventListener("click", (event) => {
  console.log("Click en la sección");
});

$sectionTitle.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Click en el título");
});

$article.addEventListener("click", () => {
  console.log(event.target, event.currentTarget);
});

document.addEventListener("click", (event) => {
  if (event.target === $article)
    console.log("Has hecho click en el articulo");
});
