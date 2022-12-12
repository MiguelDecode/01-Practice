const btns = document.querySelectorAll(".btn");
const box = document.querySelector(".box");

// document.addEventListener("click", () => {
//   if (event.target.id === "btn-1") {
//     box.innerHTML = "";
//     box.textContent = "Hello World";
//   }

//   if (event.target.id === "btn-2") {
//     box.innerHTML = "";
//     const img = document.createElement("img");
//     img.src = "./tree.jpg";
//     img.classList.add("box__image");
//     box.appendChild(img);
//   }

//   if (event.target.id === "btn-3") {
//     const btn = document.createElement("btn");
//     btn.classList.add("btn");
//     btn.textContent = "Button";
//     box.appendChild(btn);
//   }

//   if (event.target.id === "btn-4") {
//     box.innerHTML = "";
//   }
// });

const reset = () => {
  box.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", () => {
    if (event.target.id === "btn-1") {
      reset();
      box.textContent = "Hello World";
    }

    if (event.target.id === "btn-2") {
      reset();
      box.insertAdjacentHTML("beforeend", '<img src="./tree.jpg" class="box__image"></img>')
    }

    if (event.target.id === "btn-3") {
      box.insertAdjacentHTML('beforeend', '<button class="btn">Button</button>')
    }

    if (event.target.id === "btn-4") {
      reset();
    }
  });
});
