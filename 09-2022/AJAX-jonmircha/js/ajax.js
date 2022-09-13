// MÉTODO POR EL OBJETO XMLHttpRequest

(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (event) => {
    if (xhr.readyState !== 4) return;

    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Éxito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;

      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("Error");
      let message = xhr.statusText || "Ocurrío un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    console.log("Este mensaje se cargará de cualquier forma");
  });

  // Solicitud de recursos externa
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // Solicitud de recursos interna o local
  xhr.open("GET", "./assets/users.json");

  xhr.send();
})();

// MÉTODO A TRAVES DE API FETCH

(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  // Método al servidor
  // fetch("https://jsonplaceholder.typicode.com/users")

  // Método a local
  fetch("./assets/users.json")
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((error) => {
      console.log(error);
      let message = error.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error: ${error.status}: ${message} `;
    })
    .finally(() =>
      console.log(
        "Este texto se mostrará independientemente del resultado de la promesa Fetch"
      )
    );
})();

// MÉTODO A TRAVES DEL API FETCH + ASYNC AWAIT

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await response.json();

      /* if (!response.ok) {
        throw new Error("Ocurrió un error al solicitar los datos");
      } */

      if (!response.ok)
        throw { status: response.status, statusText: response.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);

      // console.log(response, json);
    } catch (error) {
      let message =
        error.statusText || "Ocurrió un error al realizar la petición";
      $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
    } finally {
      console.log("Texto que se mostrará independientemente del resultado");
    }
  }

  getData();
})();

// MÉTODO A TRAVES DE LA LIBRERÍA AXIOS

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("Respuesta de Axios:", response);

      response.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((error) => {
      console.log("Estamos dentro del catch", error.response);
      let message = error.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Axios: Esto se ejecutará independientemente del resultado");
    });
})();

// MÉTODO A TRAVES DE LA LIBRERÍA AXIOS + ASYNC AWAIT

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ),
        objectData = await response.data;

      console.log("Respuesta de Axios Async", response, objectData);

      response.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (error) {
      let message = error.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
    } finally {
      console.log(
        "Axios Async: Texto que se ejecutará independientemente del resultado"
      );
    }
  }

  getData();
})();
