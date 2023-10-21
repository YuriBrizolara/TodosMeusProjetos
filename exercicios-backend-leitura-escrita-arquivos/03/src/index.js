const express = require('express');
const app = express();
const rotasEndereco = require('./rotas/rotasEndereco');

const PORTA = process.env.PORTA || 3000;

app.use('/enderecos', rotasEndereco);

app.listen(3000);