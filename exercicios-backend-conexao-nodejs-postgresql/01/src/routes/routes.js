const express = require('express');
const {listarAutor,cadastrarAutor, cadastrarLivro, listarLivros} = require('../controllers/controllers');
const rotas = express.Router(); 
rotas.get('/autor/:id', listarAutor);
rotas.post('/autor',cadastrarAutor);
rotas.post('/autor/:id/livro',cadastrarLivro);
rotas.get('/livros', listarLivros);
module.exports= rotas