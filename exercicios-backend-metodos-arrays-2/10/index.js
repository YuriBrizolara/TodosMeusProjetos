const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];
const numerosInteirosPositivos=numeros.filter(function (filtro) {
    return Number.isInteger(filtro) && filtro % 2 === 0;
});
console.log(numerosInteirosPositivos);
