let { alunos, identificadorAluno } = require('../dados/bancodedados');
const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
}

const obterAluno = (req, res) => {
    const { id } = req.params;

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }

    return res.status(200).json(aluno);
}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    if(idade<18){
        return res.status(400).json({ mensagem: 'Tem que ser maior de 18 anos' });
    }

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' });
    }
    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201).json(aluno);
}
const excluirAluno = (req, res) => {
    const { id } = req.params;

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não existe.' });
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });

    return res.status(204).send();
}
module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    excluirAluno
}