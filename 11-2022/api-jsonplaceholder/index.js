const app = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const parragraph = document.createElement("p");
      parragraph.setAttribute("id", user.id);
      parragraph.textContent = user.name;
      parragraph.addEventListener("click", function () {
        window.location.href = `./user_detail.html?id=${user.id}`;
      });
      app.appendChild(parragraph);
    });
  })
  .catch((error) => console.log(error));
