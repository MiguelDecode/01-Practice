const app = document.querySelector(".container");

const getUrl = new URLSearchParams(window.location.search);

const id = getUrl.get("id");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(`${url}/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const article = document.createElement("article");
    article.innerHTML = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Username: ${data.username}</p>
    `;

    app.appendChild(article);
  })
  .catch((error) => console.log(error));
