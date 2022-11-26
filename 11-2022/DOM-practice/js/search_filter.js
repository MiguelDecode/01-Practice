export default function searchFilter(input, selector) {
  document.addEventListener("keyup", (event) => {
    if (event.target.matches(input)) {
      if (event.key === "Escape") {
        event.target.value = "";
      }

      document
        .querySelectorAll(selector)
        .forEach((el) =>
          el.textContent.toLowerCase().includes(event.target.value)
            ? el.classList.remove("filter")
            : el.classList.add("filter")
        );
    }
  });
}
