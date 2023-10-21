const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

const pokemonRoutes = require('./routes/pokemonRoutes');

app.use('/pokemon', pokemonRoutes);
app.listen(8000);