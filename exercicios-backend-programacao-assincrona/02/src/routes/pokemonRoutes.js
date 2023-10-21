const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.listarPokemons);
router.get('/:idOrName', pokemonController.detalharPokemon);

module.exports = router;