const { contas } = require('../bancodedados');
const validator = require("email-validator");
const verificarTodosOsCamposPreenchidos= (req, res, next) =>{
    try {
    const { nome, cpf, data_nascimento, telefone, email, senha} = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }
    if (!cpf) {
        return res.status(400).json({ mensagem: 'O cpf é obrigatório' });
    }
    if (!data_nascimento) {
        return res.status(400).json({ mensagem: 'A data de nascimento é obrigatória' });
    }
    if (!telefone) {
        return res.status(400).json({ mensagem: 'A telefone é obrigatório' });
    }
    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' });
    }
    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é obrigatória' });
    }
    next()
    } catch (error) {
        return res.status(400).json({ mensagem: 'Erro no verificar todos os campos' });
    }
    
}
const verificarCpfeEmail = (req, res, next) => {
    try {
        const { cpf, email } = req.body;
        if(cpf.length!=12){
            return res.status(400).json({ mensagem: 'Cpf tem que ter doze numeros ' });
        }
        if(validator.validate(email)===false ){
            return res.status(400).json({ mensagem: 'E-mail não é valido' });
        }
        if (contas.find((conta) => conta.usuario.cpf === cpf || conta.usuario.email === email)) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!' });
        }
        next();
        
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const numeroValido = (req, res, next) => {
    try {
        const { numeroConta } = req.params;
        if (Number.isInteger(Number(numeroConta))) {
            next();
        } else {
            return res.status(400).json({ mensagem: 'Conta não existe' });
        }
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    };
};
const valorMaiorQueZero = (req, res, next) =>{
    try {
        const { numero_conta, valor } = req.body;
        if (!numero_conta || !valor) {
            return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" });
        }
        if (valor <= 0) {
            return res.status(400).json({ mensagem: "O valor do depósito deve ser maior que zero!" });
        }
        next();
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    }
}
const numeroValidoPeloBody = (req, res, next) => {
    try {
        const numeroConta = req.body.numero_conta;  
        const conta = contas.find((conta) => conta.numero === numeroConta);
        if(!conta){
            return res.status(404).json({ mensagem: `conta não existe` });
        }
        req.conta=conta
        next();
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    }
};
const verificarSenha = (req, res, next) => {
    const { numero_conta_origem, senha } = req.body;
    try {
        const contaOrigem = contas.find((conta) => conta.numero == numero_conta_origem);
    if (contaOrigem && contaOrigem.usuario.senha !== senha) {
        return res.status(401).json({ mensagem: 'Senha inválida para a conta de origem' });
    }
    next();
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    }
    
};
const verificarSaldo = (req, res, next) => {
    const { numero_conta, valor } = req.body;
    const contaOrigem = contas.find((conta) => conta.numero === numero_conta);
    if (!contaOrigem || contaOrigem.saldo < valor) {
        return res.status(403).json({ mensagem: 'Saldo insuficiente' });
    }
    next();
};
const numeroValidoParaTransfere = (req, res, next) => {
    try {
        const numero_conta_origem = req.body.numero_conta_origem;  
        const numero_conta_destino = req.body.numero_conta_destino;
        const valor= req.body.valor
        if (!numero_conta_origem || !valor || !numero_conta_destino) {
            return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" });
        }
        if (valor <= 0) {
            return res.status(400).json({ mensagem: "O valor do depósito deve ser maior que zero!" });
        } 
        const contaOrigem = contas.find((conta) => conta.numero === numero_conta_origem);
        const contaDestino = contas.find((conta) => conta.numero === numero_conta_destino);
        if(!contaOrigem || !contaDestino){
            return res.status(404).json({ mensagem: `Umas das contas não existe` });
        }
        if(contaOrigem && contaDestino){
            if (contaOrigem.saldo < valor) {
                return res.status(403).json({ mensagem: 'Saldo insuficiente' });
            }
            req.contaOrigem=contaOrigem
            req.contaDestino=contaDestino
        }
            
        next();
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    }
}
const saldo= (req,res,next)=>{
    const { numero_conta, senha } = req.query;
    try {
        if (!numero_conta || !senha) {
            return res.status(400).json({ mensagem: "O número da conta e a senha são obrigatórios!" });
        }
        const conta = contas.find((conta) => conta.numero === numero_conta);
        if (!conta) {
            return res.status(404).json({ mensagem: "Conta bancária não encontrada!" });
        }
        if (senha !== conta.usuario.senha) {
            return res.status(401).json({ mensagem: "Senha inválida!" });
        }
        const saldo = conta.saldo;
        req.saldo= saldo
        next()
    } catch (erro) {
        return res.status(404).json({ mensagem: `Erro: ${erro.message}` });
    }
}
module.exports={
    verificarTodosOsCamposPreenchidos,
    numeroValidoParaTransfere,
    numeroValidoPeloBody,
    verificarCpfeEmail,
    valorMaiorQueZero,
    verificarSenha,
    verificarSaldo,
    numeroValido,
    saldo
};