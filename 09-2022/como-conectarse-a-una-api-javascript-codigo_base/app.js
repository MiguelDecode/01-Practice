let page = 1;
const btnBefore = document.getElementById("btnAnterior")
const btnAfter = document.getElementById("btnSiguiente")

btnBefore.addEventListener("click", () => {
  if(page > 1) {
    page--;
    cargarPeliculas();
  }
})

btnAfter.addEventListener("click", () => {
  if(page < 1000) {
    page++;
    cargarPeliculas();

  }
})


const cargarPeliculas = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1563c05888f029e76f88c0280989c4be&language=es-ES&page=${page}`
    );

    // console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      let movies = "";

      // console.log(data.results);

      data.results.forEach((movie) => {
        movies += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
          </div>
        <h3 class="titulo">${movie.title}</h3>`;
      });

      document.getElementById("container").innerHTML = movies;
    } else if (response.status === 401) {
      console.log("Api key errónea");
    } else if (response.status === 404) {
      console.log("La película no existe");
    } else {
      console.log("Hubo un errór y se desconoce la fuente");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
