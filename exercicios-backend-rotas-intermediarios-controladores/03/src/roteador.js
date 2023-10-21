// arquivo: roteador.js

const express = require('express');
const router = express.Router();
const { getImoveis, getImovelPorId } = require('./controladores/imoveis');

router.get('/imoveis', getImoveis);
router.get('/imoveis/:id', getImovelPorId);

module.exports = router;
