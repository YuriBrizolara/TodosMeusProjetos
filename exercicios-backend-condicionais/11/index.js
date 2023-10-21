//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let resultado = (rendaMensalEmCentavos * 18) / 100, somaTotal = (resultado * mesesDecorridos);

if (mesesDecorridos < 60 && resultado < 1800000) {
    console.log(`valor mensal que aluno tem que pagar é de:${resultado * 0.01} reais`);
} else if (mesesDecorridos > 60 || rendaMensalEmCentavos <= 200000 || somaTotal >= 1800000) {
    console.log('o estudante não tem que pagar nada');
}