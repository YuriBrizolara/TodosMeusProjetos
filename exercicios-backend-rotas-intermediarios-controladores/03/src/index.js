const express = require('express');
const { getImoveis, getImovelPorId } = require('./controladores/imoveis');
const roteador = require('./roteador');
const app = express();

app.get('/imoveis', getImoveis);
app.get('/imoveis/:id', getImovelPorId);

app.use(roteador);
app.listen(8000);