const express = require('express');
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes');

app.use('/pokemon', pokemonRoutes);
app.listen(8000);