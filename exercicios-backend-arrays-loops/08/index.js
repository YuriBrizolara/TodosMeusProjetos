const numeros = [3, 24, 1, 8, 11, 7, 15], numeroMaior = [0];

for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] > numeroMaior) {
        numeroMaior.pop()
        numeroMaior.push(numeros[indice]);
    }
}

console.log(numeroMaior);