const numeros = [54, 22, 14, 87, 10, 284];

let numeroDesejado = 10, localDoNumero10 = -1;
for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] === numeroDesejado) {
        localDoNumero10 = indice;

    }
}
if (localDoNumero10 === -1) {
    console.log('-1');
} else {
    console.log('3');
}