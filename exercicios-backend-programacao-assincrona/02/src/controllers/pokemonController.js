const { listarPokemons, detalharPokemon } = require('utils-playground');
exports.listarPokemons = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pokemons = await listarPokemons(page);
    const results = pokemons.results;
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Pokémons' });
  }
};
exports.detalharPokemon = async (req, res) => {
  try {
    const idOrName = req.params.idOrName;
    const pokemon = await detalharPokemon(idOrName);
    const selectedData = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    };
    res.json(selectedData);
  } catch (error) {
    res.status(404).json({ error: 'Pokémon não encontrado' });
  }
};