const palavra=['abelha'], palpite=['a']
    let acertos = 0;
    for (const indice of palavra) {
        console.log(indice);
        
        if (indice == palpite) {
          acertos++;
        }
    }
console.log(acertos);