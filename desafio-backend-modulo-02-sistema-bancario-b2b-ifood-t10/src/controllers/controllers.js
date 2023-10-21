let { contas, saques, depositos, transferencias,banco } = require('../bancodedados');
const {format} = require('date-fns')
let contagem=1
const listarContas = (req, res) => {
    const senhaBanco = req.query.senha_banco;
    const senha = banco.senha;
    if(senhaBanco===senha){
        return res.status(200).json(contas);
    }
    return res.status(403).json({ mensagem: 'A senha do banco informada é inválida!'});
}
const criarConta =(req,res) =>{
    const { nome, cpf, data_nascimento, telefone, email, senha} = req.body;
    const novaConta = {
        numero: contagem.toString(),
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha,
        }
    };
    contas.push(novaConta);
    contagem++
    return res.status(201).send()
}
const atualizarConta= (req,res) =>{ 
    const numeroConta = req.params.numeroConta;
    const { nome, telefone, email, senha, cpf, data_nascimento } = req.body;
    const acheiconta = contas.find((conta) => conta.numero === numeroConta);
    if (!acheiconta) {
        return res.status(400).json({ mensagem: `conta não existe` });
    }

    try {
        acheiconta.usuario.nome = nome;
        acheiconta.usuario.cpf = cpf;
        acheiconta.usuario.data_nascimento = data_nascimento;
        acheiconta.usuario.telefone = telefone;
        acheiconta.usuario.email = email;
        acheiconta.usuario.senha = senha;
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    };
}
const deletarConta= (req,res) =>{
    const numeroConta = req.params.numeroConta;
    const conta = contas.find((conta) => conta.numero === numeroConta);
    if(!conta){
        return res.status(400).json({ mensagem: `conta não existe` });
    }
    if (conta.saldo === 0) {
        const index = contas.indexOf(conta);
        contas.splice(index, 1);
        return res.status(204).send();
    }
    return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
};
const fazerDeposito = (req, res) => {
    const { numero_conta, valor } = req.body;
    const conta = req.conta
    conta.saldo += valor;
    const dataAtual = format(new Date(),"yyyy-MM-dd HH:mm:ss")
    const registroDeposito = {
        data: dataAtual,
        numero_conta,
        valor
    };
    depositos.push(registroDeposito);
    return res.status(204).send();
};
const fazerSaque= (req,res) =>{
    const { numero_conta, valor } = req.body;
    const conta = req.conta
    conta.saldo -= valor;
    const dataAtual = format(new Date(),"yyyy-MM-dd HH:mm:ss")
    const registroSaque = {
        data: dataAtual,
        numero_conta,
        valor
    };
    saques.push(registroSaque);
    return res.status(204).send();
}
const realizarTransferencia = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body;
    const contaOrigem = req.contaOrigem;
    const contaDestino = req.contaDestino;
    contaOrigem.saldo -= valor;
    
    contaDestino.saldo += valor;
    const dataAtual = format(new Date(),"yyyy-MM-dd HH:mm:ss");
    const transacao = {
        data: dataAtual,
        numero_conta_origem,
        numero_conta_destino,
        valor
    };
    transferencias.push(transacao);
    res.status(204).send();
};
const saldo = (req,res) => {
    const saldo = req.saldo
    return res.status(200).json({ saldo });
}
const obterExtrato = (req, res) => {
    const extrato ={
        depositos,
        saques, 
        transferencias
    }
    return res.status(200).json( extrato );
};
module.exports={
    realizarTransferencia,
    atualizarConta,
    fazerDeposito,
    obterExtrato,
    listarContas,
    deletarConta,
    criarConta,
    fazerSaque,
    saldo
};