const numeros = [3, 4, 7, 8, 1, 6, 5, 10], numerosPares = [];
let soma = 0;
for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] % 2 === 0) {
        numerosPares.push(numeros[indice]);
    }
}
for (let indice2 = 0; indice2 < numerosPares.length; indice2++) {
    soma += numerosPares[indice2];
}
console.log(soma);

