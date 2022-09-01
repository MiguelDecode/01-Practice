export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  const fn = (entries) => {
    // console.log("entries", entries);

    entries.forEach((entry) => {
      // console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(fn, {
    //root
    // rootMargin: "-250px",
    threshold: 0.5,
  });
  // console.log('observer', observer);

  $sections.forEach((el) => observer.observe(el));
}
