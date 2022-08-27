export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  const fn = (entries) => {
    console.log(`Entries: ${entries}`);
  };

  const observer = new IntersectionObserver(fn, {});

  $sections.forEach((el) => observer.observe(el));
}
