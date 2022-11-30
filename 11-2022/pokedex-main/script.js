const pokedex = document.getElementById("pokedex");
const searchPokemon = document.getElementById("poke-search");
const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

document.addEventListener("change", (event) => {
  if (event.target === searchPokemon) {
    const searchValue = searchPokemon.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        const fragment = new DocumentFragment();
        const pokemon = document.createElement("ARTICLE");
        pokemon.classList.add("pokemon");

        const bgColor = colors[data.types[0].type.name];
        pokemon.setAttribute('style', `background-color:${bgColor}`)

        const pokeId = ("00" + data.id).slice(-3);

        const pokemonData = `
        <div class="pokemon__img-container">
            <img class="pokemon__img" src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"> 
        </div>
        <div class="pokemon__reference">
            <span class="pokemon__number">#${pokeId}</span>
            <span class="pokemon__name">${data.name}</span>
        </div>
        `;
        
        pokemon.innerHTML = pokemonData;
        pokedex.appendChild(pokemon);
      })
      .catch((error) => console.log(error));
  }
});
