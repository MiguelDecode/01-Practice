const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const body = document.querySelector("body");
const btn = document.querySelector(".btn-color");
const title = document.querySelector(".color-title");

const randomIndex = () => Math.floor(Math.random() * hexValue.length);

const generateRandomColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[randomIndex()];
    console.log(color);
  }

  return color;
};

btn.addEventListener("click", () => {
  const result = generateRandomColor();
  body.style.backgroundColor = "";
  body.style.backgroundColor = result;
  title.textContent = `Background-color: ${result}`;
  console.log(result);
});
