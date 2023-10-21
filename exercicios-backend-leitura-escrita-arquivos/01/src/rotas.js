const express = require('express');
const produtos = require('./controladores/produtos');


const rotas = express();

rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:id', produtos.obterProduto);
rotas.get('/produtos/:id/frete/:cep', produtos.valorFrete);
module.exports = rotas;