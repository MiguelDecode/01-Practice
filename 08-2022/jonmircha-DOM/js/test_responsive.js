export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let tester;

  document.addEventListener("submit", (event) => {
    if (event.target === $form) {
      event.preventDefault();
      tester = window.open(
        $form.direction.value,
        "tester",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target === $form.close) tester.close();
  });
}
