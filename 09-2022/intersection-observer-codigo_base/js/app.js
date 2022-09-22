const imageOne = document.getElementById("image-one");
const imageTwo = document.getElementById("image-two");

const animateImage = (entries, observer) => {
  // console.log(entries);
  // console.log(observer);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(animateImage, {
  root: null,
  rootMargin: "-150px 0px",
  threshold: 1.0,
});

observer.observe(imageOne);
observer.observe(imageTwo);
