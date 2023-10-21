const express = require('express');
const router = express.Router();
const controladorEndereco = require('../controladores/controladorEndereco');

router.get('/:cep', async (req, res) => {
  try {
    const cep = req.params.cep;
    const endereco = await controladorEndereco.consultarEndereco(cep);
    res.json(endereco);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar o endereço' });
  }
});

module.exports = router;