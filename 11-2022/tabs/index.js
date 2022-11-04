const list = document.querySelectorAll(".li");
const blocks = document.querySelectorAll(".block");

const removeActive = (arr) => {
  arr.forEach((el) => {
    el.classList.remove(".active");
  });
};

list.forEach((item, index) => {
  item.addEventListener("click", () => {
    list.forEach((el) => el.classList.remove("active"));
    blocks.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
    blocks[index].classList.add("active");
  });
});
