const original = [5, 7, 13, 17, 26, 34, 118, 245], editado = [];
for (let indice = 0; indice < original.length; indice++) {
    if (original[indice] >= 10 && original[indice] <= 20 || original[indice] > 100) {
        editado.push(original[indice]);

    }

}
console.log(editado);
const original2 = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245], editado2 = [];
for (let indice = 0; indice < original2.length; indice++) {
    if (original2[indice] >= 10 && original2[indice] <= 20 || original2[indice] > 100) {
        editado2.push(original2[indice]);

    }

}
console.log(editado2);

