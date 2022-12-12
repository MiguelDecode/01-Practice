const boxTop = document.querySelector(".container-btn");
const boxImg = document.querySelector(".container-img");

const createBtn = (color, id) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.style.backgroundColor = color;
  btn.id = `button-${id}`;
  btn.textContent = "Button";
  return btn;
};

const createImg = (id) => {
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = `./html.png`;
  img.id = `image-${id}`;
  return img;
};

document.addEventListener("DOMContentLoaded", () => {
  boxTop.appendChild(createBtn("blue", 1));
  boxTop.appendChild(createBtn("orange", 2));
  boxTop.appendChild(createBtn("blue", 3));

  boxImg.appendChild(createImg("html"));

  document.addEventListener("click", () => {
    const img = document.getElementById("image-html");

    if (event.target.id === "button-1") {
      img.style.backgroundColor = "blue";
      img.style.padding = "1em";
      img.style.borderRadius = "0.5em";
      img.style.transform = "rotate(10deg)";

      event.target.style.visibility = "hidden";
    }

    if (event.target.id === "button-2") {
    // Minuto 5:25
    }
  });
});
