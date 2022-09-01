export default function contactFormValidations() {
  const $form = document.querySelector(".contact-form"),
    $inputs = document.querySelectorAll(".contact-form [required]");

  console.log($inputs);

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (event) => {
    if (event.target.matches(".contact-form [required]")) {
      let $input = event.target,
        pattern = $input.pattern || $input.dataset.pattern;

      // console.log($input, pattern);

      if (pattern && $input.value !== "") {
        // console.log("El input tienen patrón");

        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        // console.log("El input no tiene patrón");

        return $input.value === ""
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  document.addEventListener("submit", (event) => {
    // event.preventDefault();

    const $loader = document.querySelector(".contact-form-loader"),
      $response = document.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
