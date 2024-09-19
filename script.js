const pokemonNameInput = document.querySelector("input");
const pokemonFetchButton = document.querySelector("button");
const pokemonImageElement = document.querySelector("img");

pokemonFetchButton.addEventListener("click", async () => {
  const pokemonSpriteURL = await fetchPokemonSprite(
    pokemonNameInput.value.toLowerCase()
  );
  pokemonImageElement.src = pokemonSpriteURL;
  pokemonImageElement.style.display = "block";
});

async function fetchPokemonSprite(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Error: resource not found");
    }

    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}
