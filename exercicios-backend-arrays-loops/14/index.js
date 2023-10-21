const arrayA = [5, 32, 3, 44, 1], arrayB = [57, 4, 21, 2, 13];
for (let indice = 0; indice < arrayA.length; indice++) {
    if (arrayA[indice] < arrayB[indice]) {
        console.log(arrayA[indice]);
    } else if (arrayA[indice] > arrayB[indice]) {
        console.log(arrayB[indice]);
    }
}