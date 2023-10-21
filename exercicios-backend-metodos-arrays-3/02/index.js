const cidades = [
    "Salvador",
    "São Paulo",
    "Brasília",
    "Recife",
    "Rio de Janeiro",
];

const maiorCidade = cidades.reduce((maior, cidade) => {
    if (cidade.length > maior.length) {
        return cidade;
    } else {
        return maior;
    }
}, "");

console.log(maiorCidade);