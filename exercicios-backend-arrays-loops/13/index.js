const disjuntores = [false, false, true, false, false, true, false, false];

for (let indice = 0; indice < disjuntores.length; indice++) {
    if (disjuntores[indice] === true) {
        console.log(indice);
    }
}