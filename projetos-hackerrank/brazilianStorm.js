const notas=[100,100,100,20,50,30,14,100,100,100];
let soma = 0, menorNota = notas[0], maiorNota=notas[0];
for (let indice = 0; indice < notas.length; indice++) {
    soma += notas[indice];
    if (notas[indice] < menorNota) {
        menorNota = notas[indice]
    }
    if(notas[indice]> maiorNota){
        maiorNota= notas[indice]
    }
}

soma = (soma - menorNota - maiorNota)/(notas.length-2);

console.log(soma);