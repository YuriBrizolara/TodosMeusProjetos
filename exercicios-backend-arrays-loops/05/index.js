const original = [1, 4, 12, 21, 53, 88, 112], numerosPares = [];
for (let indice = 0; indice < original.length; indice++) {
    if (original[indice] % 2 === 0) {
        numerosPares.push(original[indice]);
    }
}
console.log(numerosPares);