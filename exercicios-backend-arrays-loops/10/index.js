const numeros = [8, 11, 4, 1];
let minimo = numeros[0], maximo = numeros[0], maiorDiferenca = 0;
for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] < minimo) {
        minimo = numeros[indice]
    } else if (numeros[indice] > maximo) {
        maximo = numeros[indice]
    }
}
maiorDiferenca = maximo - minimo;
console.log("Maior diferença: " + maiorDiferenca);