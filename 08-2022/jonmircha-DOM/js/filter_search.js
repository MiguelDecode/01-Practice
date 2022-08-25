export default function searchFilters(input, selector) {
  document.addEventListener("keyup", (event) => {
    if (event.target.matches(input)) {
      // console.log(event.key);
      // console.log(event.target.value);

      if (event.key === "Escape") event.target.value = "";

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
