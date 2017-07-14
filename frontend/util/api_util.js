export const fetchAllPokemon = () => {
  return $.ajax({
    type: "GET",
    url: "api/pokemons"
  });
};

export const fetchOnePokemon = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/pokemons/${id}`
  });
};
