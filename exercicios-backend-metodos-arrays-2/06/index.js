const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
const cidadesComAte8Caracteres = cidades.filter(function filtroDeCidades(cidade) {
    return cidade.length <= 8;
});
console.log(cidadesComAte8Caracteres);