export default function scrollTopBtn(btn) {
  const $scrollBtn = document.querySelector(btn);

  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}