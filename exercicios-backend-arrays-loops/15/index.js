const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let indice = 0; indice < original.length; indice++) {
    if (original[indice] % 2 === 0) {
        pares.push(original[indice]);
    } else
        impares.push(original[indice]);

}
console.log(pares);
console.log(impares);