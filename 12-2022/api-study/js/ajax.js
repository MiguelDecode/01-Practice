// Utilizando el Objeto XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");

  const $fragment = document.createDocumentFragment();

  // console.log(xhr);

  xhr.addEventListener("readystatechange", (event) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);

      json.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name}***${user.email}***${user.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      let message = xhr.statustext || "Ocurrío un error";
      $xhr.innerHTML = `Error ${xhr.status}:${message}`;
    }

    // console.log("Este mensaje cargará en todas las ocasiones");
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();

// Utilizando API Fetch
(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      // console.log(data);
      data.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name}**${user.email}**${user.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el catch", err);
      let message = err.statusText || "Ocurrió un Error";
      $fetch.innerHTML = `Error: ${err.status}: ${message}`;
    });
  // .finally(() =>
  //   console.log(
  //     "Esto se ejecutará siempre indifirentemente del resultado de la respuesta"
  //   )
  // );
})();

// Utilizando API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await res.json();

      if (!res.ok) {
        // throw new Error("Ocurrio un Error al solicitar los datos");
        throw { status: res.status, statusText: res.statusText };
      }

      json.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name}--${user.email}--${user.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (error) {
      let message = error.statustext || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
    } finally {
      // console.log(
      //   "Esta linea se ejecutará indiferentemente del resultado de la respuesta"
      // );
    }
  }

  getData();
})();

// Utilizando la librería Axios
(() => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let data = res.data;

      data.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name}--${user.email}--${user.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((error) => {
      let message = error.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    .finally
    // console.log(
    //   "Esto se ejecutará indiferentemente del resultado de la petición"
    // )
    ();
})();

// Utilizando la librería Axios con async-await
(() => {
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let data = await res.data;

      data.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name}--${user.email}--${user.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (error) {
      let message = error.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
    } finally {
      console.log(
        "Esto se ejecutará independientemente del resultado de la petición"
      );
    }
  }

  getData();
})();
