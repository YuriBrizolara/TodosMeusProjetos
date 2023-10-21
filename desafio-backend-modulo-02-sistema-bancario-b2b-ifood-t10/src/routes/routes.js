const express = require('express');
const contas = require('../controllers/controllers');
const {
    verificarTodosOsCamposPreenchidos,
    numeroValidoPeloBody,
    verificarCpfeEmail,
    valorMaiorQueZero,
    verificarSenha,
    verificarSaldo,
    numeroValido,
    numeroValidoParaTransfere,
    saldo
} = require('../middleware/middleware');
const rotas = express.Router(); 


rotas.get('/contas', contas.listarContas);
rotas.get('/contas/saldo',saldo, contas.saldo);
rotas.get('/contas/extrato',saldo, contas.obterExtrato);
rotas.post('/contas', verificarCpfeEmail,verificarTodosOsCamposPreenchidos, contas.criarConta);
rotas.post('/transacoes/depositar',numeroValidoPeloBody,valorMaiorQueZero, contas.fazerDeposito);
rotas.post('/transacoes/sacar',numeroValidoPeloBody,valorMaiorQueZero,verificarSaldo, contas.fazerSaque);
rotas.post('/transacoes/transferir',numeroValidoParaTransfere,verificarSenha, contas.realizarTransferencia);
rotas.put('/contas/:numeroConta/usuario',verificarTodosOsCamposPreenchidos,numeroValido, contas.atualizarConta);
rotas.delete('/contas/:numeroConta',numeroValido, contas.deletarConta);
module.exports = rotas;
