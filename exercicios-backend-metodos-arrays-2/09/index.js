const numeros = [10, 987, -886, 0, 12, 199, -45, -67];
const numerosInteirosPositivos = numeros.filter(function filtrar(filtro) {

    return filtro>=0 && Number.isInteger(filtro)
});
console.log(numerosInteirosPositivos);