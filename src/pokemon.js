import { Pokedex } from "pokeapi-js-wrapper";

export async function getPokemons() {
  const pokemons = [];
  const pokedex = await Pokedex.init();
  const names = [
    "pikachu",
    "bulbasaur",
    "squirtle",
    "gyarados",
    "psyduck",
    "jigglypuff",
    "charmander",
    "chikorita",
    "slowpoke",
    "pidgey",
  ];
  for (let index = 0; index < 10; index++) {
    let name = names[index];
    let pokemonData = await pokedex.getPokemonByName(name);
    let url =
      pokemonData.sprites.versions["generation-v"]["black-white"].animated
        .front_default;
    let pokemon = { id: pokemonData.id, name: name, img: url };
    pokemons.push(pokemon);
  }
  return pokemons;
}
